import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { StripeProvider, usePaymentSheet } from "@stripe/stripe-react-native";
import PaymentService from "@/models/services/PaymentService";
import colors from "@/styles/colors";

export default function Cart() {
  const [valor, setValor] = useState("5000"); // 50,00 BRL em centavos
  const [mensagem, setMensagem] = useState("");
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const paymentService = new PaymentService();

  // Hook do Stripe
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();

  // Passo 1: Criar o PaymentIntent no backend
  const initializePayment = async () => {
    setMensagem("Criando pagamento...");

    try {
      const secret = await paymentService.paymentIntent(Number(valor));
      setClientSecret(secret);

      // Inicializa o Payment Sheet
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: secret,
        merchantDisplayName: "Minha Loja",
        allowsDelayedPaymentMethods: true,
        // Opcional: personalizar aparência
        // appearance: { colors: { primary: '#6366f1' } },
      });

      if (error) {
        setMensagem(`Erro ao iniciar: ${error.message}`);
        setClientSecret(null);
        return;
      }

      setMensagem("Toque em Pagar para continuar");
    } catch (err: any) {
      setMensagem(`Erro: ${err.message}`);
      setClientSecret(null);
    }
  };

  // Passo 2: Abrir o modal e processar pagamento
  const processPayment = async () => {
    if (!clientSecret) return;

    const { error } = await presentPaymentSheet();

    if (error) {
      // Usuário cancelou ou houve erro
      setMensagem(`Pagamento cancelado: ${error.message}`);
    } else {
      // Pagamento bem-sucedido no Stripe
      try {
        await paymentService.confirmPayment(clientSecret);
        setMensagem("Pagamento realizado e salvo com sucesso!");
        Alert.alert("Sucesso", "Pagamento concluído com êxito!");
      } catch (err: any) {
        setMensagem("Pagamento OK, mas erro ao salvar no sistema.");
        console.error("Erro no backend:", err);
      }
    }
  };

  return (
    <StripeProvider
      publishableKey="pk_test_51SL2OxPzbAQc3AyWnQzPhAmqt4i6Cu1phykut9ozfQowBSm6Z5yMo38iA7L65Wc5SJ3LjLkR2KSDyPq2Ig99SdCl00VgM0BQ7q"
      merchantIdentifier="merchant.com.sualoja" // apenas iOS (Apple Pay)
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.gray[900],
          padding: 16,
        }}
      >
        <Text style={{ color: colors.white, fontSize: 20, marginBottom: 20 }}>
          Pagamento com Stripe
        </Text>

        <TextInput
          style={{
            backgroundColor: colors.white,
            borderRadius: 8,
            padding: 12,
            width: 220,
            textAlign: "center",
            marginBottom: 20,
            fontSize: 16,
          }}
          keyboardType="numeric"
          placeholder="Valor em centavos"
          value={valor}
          onChangeText={setValor}
        />

        {/* Botão para iniciar o PaymentIntent */}
        <View style={{ marginBottom: 16, width: 220 }}>
          <Button
            title="Iniciar Pagamento"
            onPress={initializePayment}
            disabled={loading || !!clientSecret}
            color="#6366f1"
          />
        </View>

        {/* Botão para abrir o modal do cartão */}
        {clientSecret && (
          <View style={{ width: 220 }}>
            <Button
              title="Pagar Agora"
              onPress={processPayment}
              disabled={loading}
              color="#10b981"
            />
          </View>
        )}

        {/* Mensagem de status */}
        <Text
          style={{
            color: colors.white,
            marginTop: 24,
            textAlign: "center",
            fontSize: 16,
            minHeight: 24,
          }}
        >
          {mensagem}
        </Text>
      </View>
    </StripeProvider>
  );
}
