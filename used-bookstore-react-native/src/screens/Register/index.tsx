import * as S from "./styles";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import RegisterImage from "../../assets/register.png";
import { Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { api, zipCodeApi } from "../../utils/api";
import { useState } from "react";

interface RegistrationFormProps {
  name: string;
  zipCode: string;
  phone: string;
  address: string;
  district: string;
  city: string;
  cpf: string;
  email: string;
  password: string;
  repeatPassword: string;
}

interface FetchZipCodeProps {
  target: {
    value: string;
  };
}

interface CheckCpfProps {
  target: {
    value: string;
  };
}

export function Register() {
  const { navigate } = useNavigation<any>();
  const [registeredCpf, setRegisteredCpf] = useState<boolean>();
  const [passwordEqual, setPasswordEqual] = useState<string>();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegistrationFormProps>();

  const onSubmit = async (data: RegistrationFormProps) => {
    if (data.password !== data.repeatPassword) {
      return setPasswordEqual("Passwords must match");
    }
    setPasswordEqual("");

    try {
      await api.post("/registration", {
        name: data.name,
        zipCode: Number(data.zipCode),
        phone: data.phone,
        address: data.address,
        district: data.district,
        city: data.city,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword,
      });

      navigate("SuccessRegister");
    } catch (error) {
      Alert.alert("Register error!");
      console.log(error);
    }
  };

  async function fetchZipCode(code: FetchZipCodeProps) {
    const zipCodeFiltered = code.target.value;
    if (zipCodeFiltered.length < 8 || zipCodeFiltered.length > 8) {
      return;
    }
    try {
      const response = await zipCodeApi.get(`/${zipCodeFiltered}/json/`);
      setValue("address", response.data.logradouro);
      setValue("district", response.data.bairro);
      setValue("city", response.data.localidade);
    } catch (error) {
      console.log(error);
    }
  }

  async function checkCpf(cpf: CheckCpfProps) {
    const cpfValue = cpf.target.value;
    if (cpfValue.length < 11 || cpfValue.length > 11) {
      return;
    }
    try {
      const response = await api.get(`/registration/${cpfValue}`);
      if (response.status === 200) {
        setRegisteredCpf(false);
      }
    } catch (error) {
      setRegisteredCpf(true);
      console.log(error);
    }
  }

  return (
    <S.Container>
      <Header />
      <BackButton />

      <S.ScrollRegister showsVerticalScrollIndicator={false}>
        <S.Content>
          <Image
            source={RegisterImage}
            style={{
              width: "100%",
              height: 80,
              borderRadius: 10,
              marginBottom: 20,
            }}
          />

          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field: { onChange, value } }) => (
              <S.Input
                placeholder="Name"
                placeholderTextColor="#AAA"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && (
            <S.ContainerError>
              <S.TextError>{errors.name.message}</S.TextError>
            </S.ContainerError>
          )}

          <Controller
            name="zipCode"
            control={control}
            rules={{
              required: "ZIP Code is required",
              onBlur: fetchZipCode,
              minLength: {
                value: 8,
                message: "Please enter at least 8 digits",
              },
              maxLength: {
                value: 8,
                message: "Please enter a maximum of 8 digits",
              },
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <S.Input
                placeholder="ZIP CODE"
                placeholderTextColor="#AAA"
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
              />
            )}
          />
          {errors.zipCode && (
            <S.ContainerError>
              <S.TextError>{errors.zipCode.message}</S.TextError>
            </S.ContainerError>
          )}

          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone is required",
              minLength: {
                value: 10,
                message: "Please enter at least 10 digits",
              },
              maxLength: {
                value: 11,
                message: "Please enter a maximum of 11 digits",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <S.Input
                placeholder="Phone"
                placeholderTextColor="#AAA"
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {errors.phone && (
            <S.ContainerError>
              <S.TextError>{errors.phone.message}</S.TextError>
            </S.ContainerError>
          )}

          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field: { onChange, value } }) => (
              <S.Input
                placeholder="Address"
                placeholderTextColor="#AAA"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {errors.address && (
            <S.ContainerError>
              <S.TextError>{errors.address.message}</S.TextError>
            </S.ContainerError>
          )}

          <Controller
            name="district"
            control={control}
            rules={{ required: "Neighborhood is required" }}
            render={({ field: { onChange, value } }) => (
              <S.Input
                placeholder="Neighborhood"
                placeholderTextColor="#AAA"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.district && (
            <S.ContainerError>
              <S.TextError>{errors.district.message}</S.TextError>
            </S.ContainerError>
          )}

          <Controller
            name="city"
            control={control}
            rules={{ required: "City is required" }}
            render={({ field: { onChange, value } }) => (
              <S.Input
                placeholder="City"
                placeholderTextColor="#AAA"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.city && (
            <S.ContainerError>
              <S.TextError>{errors.city.message}</S.TextError>
            </S.ContainerError>
          )}

          <Controller
            name="cpf"
            control={control}
            rules={{
              required: "CPF is required",
              onBlur: checkCpf,
              minLength: {
                value: 11,
                message: "Please enter at least 11 digits",
              },
              maxLength: {
                value: 11,
                message: "Please enter a maximum of 11 digits",
              },
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <S.Input
                placeholder="CPF"
                placeholderTextColor="#AAA"
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
              />
            )}
          />
          {errors.cpf && (
            <S.ContainerError>
              <S.TextError>{errors.cpf.message}</S.TextError>
            </S.ContainerError>
          )}
          {!!registeredCpf && (
            <S.ContainerError>
              <S.TextError>CPF já cadastrado no sistema</S.TextError>
            </S.ContainerError>
          )}

          <Controller
            name="email"
            control={control}
            rules={{ required: "E-mail is required" }}
            render={({ field: { onChange, value } }) => (
              <S.Input
                placeholder="E-mail"
                placeholderTextColor="#AAA"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && (
            <S.ContainerError>
              <S.TextError>{errors.email.message}</S.TextError>
            </S.ContainerError>
          )}

          <Controller
            name="password"
            control={control}
            rules={{
              required: "Required field",
              minLength: {
                value: 6,
                message: "Please enter at least 6 digits",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <S.Input
                placeholder="New password"
                placeholderTextColor="#AAA"
                secureTextEntry={true}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password && (
            <S.ContainerError>
              <S.TextError>{errors.password.message}</S.TextError>
            </S.ContainerError>
          )}

          <Controller
            name="repeatPassword"
            control={control}
            rules={{
              required: "Required field",
              minLength: {
                value: 6,
                message: "Please enter at least 6 digits",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <S.Input
                placeholder="Repeat previous password"
                placeholderTextColor="#AAA"
                secureTextEntry={true}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.repeatPassword && (
            <S.ContainerError>
              <S.TextError>{errors.repeatPassword.message}</S.TextError>
            </S.ContainerError>
          )}

          {passwordEqual !== null && (
            <S.ContainerError>
              <S.TextError>{passwordEqual}</S.TextError>
            </S.ContainerError>
          )}

          <S.LoginButton
            onPress={handleSubmit(onSubmit)}
            disabled={!!registeredCpf}
          >
            <S.LoginButtonText>Register</S.LoginButtonText>
          </S.LoginButton>
        </S.Content>

        <Footer />
      </S.ScrollRegister>
    </S.Container>
  );
}
