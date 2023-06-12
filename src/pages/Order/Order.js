import {useState} from "react";
import WrapperApp from "components/WrapperApp";
import {useForm} from "react-hook-form";
import Button from "components/Button"
import {Box, Step, StepButton, Stepper, Typography} from "@mui/material";

import ConfirmOrder from "./components/ConfirmOrder";
import PersonalData from "./components/PersonalData";
import CreditCard from "./components/CreditCard";
import Address from "./components/Address/Address";

import cl from "./Order.module.scss";

const STEPS = [
  "Данные покупателя",
  "Банковские реквизиты",
  "Адрес доставки"
];

const Order = ({
  countProductInBasket,
  buy,
  onOrder
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const { register, handleSubmit, formState: { errors }, control, getValues, trigger } = useForm({
    mode: "onChange"
  });
  const [_, setPersonalData] = useState({email: "", name: "", phone: ""});

  const {
    register: registerCreditCard,
    handleSubmit: handleSubmitCreditCard,
    formState: { errors: errorsCreditCard },
    control: controlCreditCard,
    getValues: getValuesCreditCard,
    setValue: setValueCreditCard,
    trigger:triggerCreditCard,
    watch: watchCreditCard,
  } = useForm({
    mode: "onChange"
  });

  const [__, setCreditCard] = useState({
    cvc: "",
    expiry: "",
    expiryyear: "",
    name: "",
    number: ""
  });

  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    formState: { errors: errorsAddress },
    trigger:triggerAddress,
    getValues: getValuesAddress,
    setValue :setValueAddress,
    setFocus: setFocusAddress,
    clearErrors: clearErrorsAddress
  } = useForm({
    mode: "onChange"
  });
  const [___, setAddress] = useState({
    address: ""
  });

  const totalSteps = () => {
    return STEPS.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all STEPS have been completed,
          // find the first step that has been completed
        STEPS.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    console.log('activeStep', activeStep);
    switch(activeStep) {
      case 0:
        trigger();
        handleSubmit(() => {
          newCompleted[activeStep] = true;
          setCompleted(newCompleted);
          handleNext();
          setPersonalData({...getValues()});
        })()
        return;
      case 1:
        triggerCreditCard();
        handleSubmitCreditCard(() => {
          newCompleted[activeStep] = true;
          setCompleted(newCompleted);
          handleNext();
          setCreditCard({...getValuesCreditCard()});
        })()
        return;
      case 2:
        triggerAddress();
        handleSubmitAddress(() => {
          newCompleted[activeStep] = true;
          setCompleted(newCompleted);
          handleNext();
          setAddress({...getValuesAddress()});
        })()
        return
      default:
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <WrapperApp countProductInBasket={countProductInBasket}>
      <h1 className={cl.title}>
        Оформление заказа
      </h1>
      <Box sx={{ width: '100%', paddingTop: '40px' }}>
        <Stepper nonLinear activeStep={activeStep}>
          {STEPS.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>
                  Изменить введённые данные
                </Button>
              </Box>
              <ConfirmOrder buy={buy} onOrder={onOrder} infoBuyer={{
                user: {...getValues()},
                card: {...getValuesCreditCard()},
                address: {...getValuesAddress()},
              }}/>
            </>
          ) : (
            <>
              <Box>
                { activeStep === 0 && (
                  <PersonalData
                    useForm={{ register, handleSubmit, formState: { errors }, control }}
                  />
                )}
                { activeStep === 1 && (
                  <CreditCard
                    useForm={{
                      registerCreditCard,
                      handleSubmitCreditCard,
                      formState: { errorsCreditCard },
                      controlCreditCard,
                      getValuesCreditCard,
                      triggerCreditCard,
                      setValueCreditCard,
                      watchCreditCard,
                    }}
                  />
                )}
                { activeStep === 2 && (
                  <Address
                    useForm={{
                      registerAddress,
                      handleSubmitAddress,
                      formState: { errorsAddress },
                      triggerAddress,
                      getValuesAddress,
                      setValueAddress,
                      setFocusAddress,
                      clearErrorsAddress,
                    }}
                  />
                )}
              </Box>
              <Box sx={{ display: 'flex', gap: '15px', flexDirection: 'row', pt: 2 }}>
                <Button
                  variant="outlined"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Предыдущий шаг
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button variant="outlined" onClick={handleNext}>
                  Следующий шаг
                </Button>
                {activeStep !== STEPS.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button
                      onClick={handleComplete}
                    >
                      {completedSteps() === totalSteps() - 1
                        ? 'Завершить заказ'
                        : 'Подтвердить данные для текущего шага'}
                    </Button>
                  ))}
              </Box>
            </>
          )}
        </div>
      </Box>
    </WrapperApp>
  )
}

export default Order;