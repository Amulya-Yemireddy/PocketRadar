import { Pressable, StyleSheet, Text, View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/common/PrimaryButton";
import Screen from "../../components/layout/Screen";
import AuthHeader from "../../features/auth/components/AuthHeader";
import AuthInput from "../../features/auth/components/AuthInput";
import PasswordInput from "../../features/auth/components/PasswordInput";

import { Controller } from "react-hook-form";
import { signupSchema } from "../../features/auth/validation";
import { useAuth } from "../../context/AuthContext";
import { router } from "expo-router";
import * as authApi  from "../../services/authApi";

export default function Signup() {
  const {control, handleSubmit, formState: { errors },} = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
  });

  const { login } = useAuth();

  const onSubmit = async (data) => {
  try {
    const result = await authApi.register(
      data.fullName,
      data.email,
      data.password
    );

    await login(
      result.data.token,
      result.data.user
    );

    router.replace("/");
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};
  return (
    <Screen scrollable keyboardAware >
      <View style={styles.container}>
        <AuthHeader
          greeting="Welcome!"
          title="Create Account"
          subtitle="Create your PocketRadar account."
        />
        <Controller
  control={control}
  name="fullName"
  render={({ field: { onChange, value } }) => (
    <AuthInput
      label="Full Name"
      placeholder="Enter your full name"
      value={value}
      onChangeText={onChange}
      error={errors.fullName?.message}
    />
  )}
/>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <AuthInput
              label="Email Address"
              placeholder="Enter your email"
              keyboardType="email-address"
              value={value}
              onChangeText={onChange}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              value={value}
              onChangeText={onChange}
              error={errors.password?.message}
            />
          )}
        />

        <Controller
  control={control}
  name="confirmPassword"
  render={({ field: { onChange, value } }) => (
    <PasswordInput
      label="Confirm Password"
      placeholder="Confirm your password"
      value={value}
      onChangeText={onChange}
      error={errors.confirmPassword?.message}
    />
  )}
/>


        <PrimaryButton title="Create Account" onPress={handleSubmit(onSubmit)} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>

          <Pressable  onPress={() => router.replace("/auth/login")}>
            <Text style={styles.signup}>Sign In</Text>
          </Pressable>
          
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  forgot: {
    alignSelf: "flex-end",
    marginBottom: 30,
    color: "#2563EB",
    fontWeight: "600",
  },

  footer: {
    marginTop: 40,
    alignItems: "center",
  },

  footerText: {
    color: "#6B7280",
    marginBottom: 6,
  },

  signup: {
    color: "#2563EB",
    fontWeight: "700",
  },
});
