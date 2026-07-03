import { Pressable, StyleSheet, Text, View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/common/PrimaryButton";
import Screen from "../../components/layout/Screen";
import AuthHeader from "../../features/auth/components/AuthHeader";
import AuthInput from "../../features/auth/components/AuthInput";
import PasswordInput from "../../features/auth/components/PasswordInput";

import { Controller } from "react-hook-form";
import { login } from "../../services/authApi";
import { loginSchema } from "../../features/auth/validation";

export default function Login() {
  const {control, handleSubmit, formState: { errors },} = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
  try {
    const result = await login(
      data.email,
      data.password
    );

    console.log("Result:", result);

  } catch (error) {
  console.log("FULL ERROR:");
  console.log(error);

  console.log("MESSAGE:");
  console.log(error.message);

  console.log("RESPONSE:");
  console.log(error.response);

  console.log("REQUEST:");
  console.log(error.request);

  }
};

  return (
    <Screen>
      <View style={styles.container}>
        <AuthHeader
          greeting="Good to see you again."
          title="Welcome Back 👋"
          subtitle="Sign in to continue managing your finances."
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

        <Pressable>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </Pressable>

        <PrimaryButton title="Sign In" onPress={handleSubmit(onSubmit)} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>

          <Pressable>
            <Text style={styles.signup}>Create Account</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
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
