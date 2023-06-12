import Input from "components/Input";
import InputPhone from "components/InputPhone";
import {Container} from "@mui/material";

const PersonalData = (
  {
    useForm: { register, handleSubmit, formState: { errors }, control }
  }
) => {

  return (
    <Container
      style={{marginTop: '20px'}}
      component="main"
      maxWidth="xs"
    >
      <Input
        register={() => {return register("name", {
          required: "ФИО обязательно к заполнению",
          pattern: {
            value:  /^([^0-9]*)$/,
            message: "Поле не должно содержать цифр"
          }
        })}}
        error={Boolean(errors.name)}
        helperText={errors?.name?.message}
        label="ФИО"
      />
      <Input
        label="Email"
        register={() => {return register("email", {
          required: "Email обязательно к заполнению",
          pattern: {
            value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            message: "Некорректный формат email"
          }

        })}}
        error={!!errors.email}
        helperText={errors?.email?.message}
      />
      <InputPhone
        control={control}
      />
    </Container>
  )
}

export default PersonalData;