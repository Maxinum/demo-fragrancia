import React from "react";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const History = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = [
        {
            label: '01/03/2023',
            description: `Сказал что занимается оптом на рынке 10 лет из-за этого нужно максимально крутые цены.`,
        },
        {
            label: '01/03/2023',
            description:
                'Сказал что занимается оптом на рынке 10 лет из-за этого нужно максимально крутые цены.',
        },
        {
            label: '01/03/2023',
            description: `Сказал что занимается оптом на рынке 10 лет из-за этого нужно максимально крутые цены.`,
        },
    ];
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography
                    variant={"body2"}
                    component={"span"}
                >
                    {steps[activeStep].label}
                </Typography>
            </Paper>
            <Typography
                variant={"body2"}
                component={"span"}
                sx={{ maxWidth: 400, width: '100%' }}
            >
                {steps[activeStep].description}
            </Typography>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Вперед
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Назад
                    </Button>
                }
            />
        </Box>
    );
}

export default History;