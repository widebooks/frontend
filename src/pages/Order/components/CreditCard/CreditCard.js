import React, {useEffect, useState} from 'react';
import Cards from 'react-credit-cards';
import Input from "components/Input";
import Select from "components/Select";

import "./form-style.css";
import './CreditCard.css';



const normalizeCardNumber = (val) => {
  let returnVal = val.replace(/[A-Za-z}"`~_=.\->\]|<?+*/,;\[:{\\!@#\/'$%^&*()]/g, "") ;

  if (returnVal.length === 4 || returnVal.length === 9 || returnVal.length === 14) {
    return  returnVal.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")
  } else {
    return returnVal.slice(0, 19);
  }
}

const normalizeCardName = (val) => {
  return val.replace(
    /[}"`~_=.\->\]|<?+*/,\d;\[:{\\!@#\/'$%^&*()]/g,
    ""
  ).slice(0,20);
}

const normalizeCardCvc = (val) => {
  let returnVal = val.replace(/[A-Za-z}"`~_=.\->\]|<?+*/,;\[:{\\!@#\/'$%^&*()]/g, "") ;

  let invalidChars = ["-", "+", "e", "E", " ", "."];

  return returnVal.replace(/[-+eE\.\s]/, "").slice(0,4);
}

const optionsExpiry = [
  {
    value: "month",
    label: "Месяц",
  },
  {
    value: "01",
    label: "01",
  },
  {
    value: "02",
    label: "02",
  },
  {
    value: "03",
    label: "03",
  },
  {
    value: "04",
    label: "04",
  },
  {
    value: "05",
    label: "05",
  },
  {
    value: "06",
    label: "06",
  },
  {
    value: "07",
    label: "07",
  },
  {
    value: "08",
    label: "08",
  },
  {
    value: "09",
    label: "09",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "11",
    label: "11",
  },
  {
    value: "12",
    label: "12",
  },
];

const optionsExpiryyear = [
  {
    value: "years",
    label: "Years",
  },
  {
    value: "2020",
    label: "2020",
  },
  {
    value: "2021",
    label: "2021",
  },
  {
    value: "2022",
    label: "2023",
  },
  {
    value: "2024",
    label: "2024",
  },
  {
    value: "2025",
    label: "2025",
  },
  {
    value: "2026",
    label: "2026",
  },
  {
    value: "2027",
    label: "2027",
  },
  {
    value: "2028",
    label: "2028",
  },
  {
    value: "2029",
    label: "2029",
  },
  {
    value: "2030",
    label: "2030",
  },
]

const CreditCard = (
  {
    useForm: {
      registerCreditCard: register,
      handleSubmitCreditCard: handleSubmit,
      formState: { errorsCreditCard: errors },
      controlCreditCard: control,
      getValuesCreditCard: getValues,
      triggerCreditCard: trigger,
      setValueCreditCard: setValue,
      watchCreditCard: watch
    }
  }
) => {
  const [stateCreditCard, setStateCreditCard] = useState({
    cvc: '',
    expiry: "",
    focused: "name",
    name: "",
    number: "",
    expiryyear: ""
  });

  const handleInputFocus = (e) => {
    setStateCreditCard({
      ...stateCreditCard,
      focused: e.target.name
    });
  };


  const spliceExpiry = () => {
    if (!(getValues("expiry") || !(getValues("expiryyear")))){
      return ""
    }
    let returnStr = "";
    if (!isNaN(parseInt(getValues("expiry")))) {
      returnStr += getValues("expiry");
    } else {
      returnStr += '  ';
    }
    if (!isNaN(parseInt(getValues("expiryyear")))) {
      returnStr += getValues("expiryyear").slice(2,4);
    }
    return returnStr
  }

  return (
    <div id="PaymentForm">
      <div className="credit-card ">
        <Cards
          number={stateCreditCard.number}
          name={stateCreditCard.name}
          expiry={stateCreditCard.expiry}
          cvc={stateCreditCard.cvc}
          focused={stateCreditCard.focused}
        />
      </div>
      <div className="card">
        <form className="payment-form">
          <Input
            register={() => {return register("number", {
              required: "Поле с номером карты обязательно к заполнению",
              minLength: {
                value: 19,
                message: "Номер карты должен состоять из 16 символов"
              }
            })}}
            onInput={(e) => {
              setValue(
                "number",
                normalizeCardNumber(e.target.value)
              );
              setStateCreditCard({
                ...stateCreditCard,
                number: normalizeCardNumber(e.target.value)
              })
            }}
            onFocus={handleInputFocus}
            error={Boolean(errors.number)}
            helperText={errors?.number?.message}
            label="Номер банковской карты"
          />
          <Input
            register={() => {return register("name", {
              required: "Имя владельца карты обязательно к заполнению",
            })}}
            onInput={(e) => {
              setValue(
                "name",
                normalizeCardName(e.target.value),
              )
              setStateCreditCard({
                ...stateCreditCard,
                name: normalizeCardName(e.target.value),
              })
            }}
            onFocus={handleInputFocus}
            error={Boolean(errors.name)}
            helperText={errors?.name?.message}
            label="Имя владельца карты"
          />
          <div className="select__wrapper">
            <Select
              register={() => {return register("expiry", {
                required: "Поле обязательно",
                maxLength: {
                  value: 2,
                  message: 'Выберите значение'
                }
              })}}
              onClose={() => {
                setStateCreditCard({
                  ...stateCreditCard,
                  expiry: spliceExpiry(),
                })
              }}
              options={optionsExpiry.map(v => v.label)}
              defaultValue="month"
              onFocus={handleInputFocus}
              error={Boolean(errors.expiry)}
              helperText={errors?.expiry?.message}
              name="День эспирации"
            />
            <Select
              register={() => {return register("expiryyear", {
                required: "Поле обязательно",
                maxLength: {
                  value: 4,
                  message: 'Выберите значение'
                }
              })}}
              onClose={() => {
                setStateCreditCard({
                  ...stateCreditCard,
                  expiry: spliceExpiry(),
                })
              }}
              options={optionsExpiryyear.map(v => v.label)}
              defaultValue="years"
              onFocus={handleInputFocus}
              error={Boolean(errors.expiryyear)}
              helperText={errors?.expiryyear?.message}
              name="Год эспирации"
            />
          </div>
          <Input
            register={() => {return register("cvc", {
              required: "CVC обязательно",
              minLength: {
                value: 4,
                message: "CVC имеет некорректный формат"
              },
              maxLength: 5
            })}}
            onInput={(e) => {
              setValue(
                "cvc",
                normalizeCardCvc(e.target.value)
              )
              setStateCreditCard({
                ...stateCreditCard,
                cvc: normalizeCardCvc(e.target.value),
              })
            }}
            onFocus={handleInputFocus}
            error={Boolean(errors.cvc)}
            helperText={errors?.cvc?.message}
            label="CVC"
          />
        </form>
      </div>
    </div>
  );
};

export default CreditCard;