import React, { useState } from "react";
import { Button, Grid, Paper, Typography, Container } from '@mui/material';

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
        answer: 'Paris'
    },
    {
        question: 'What is the largest planet in the solar system?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        answer: 'Jupiter'
    },
    {
        question: 'What is the highest mountain in the world?',
        options: ['Everest', 'Kilimanjaro', 'Denali', 'Aconcagua'],
        answer: 'Everest'
    },
    {
        question: 'Who wrote the Harry Potter series of books?',
        options: ['J.K. Rowling', 'Stephen King', 'Dan Brown', 'George R.R. Martin'],
        answer: 'J.K. Rowling'
    }
]

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOption = (answer) => {
        if (answer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleReset = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
    };

    return (
        <>
            <Container>
                <Grid item container lg={8} md={12} sm={12} xs={12} sx={{ margin: '40px auto' }} >
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Paper elevation={3} style={{ padding: '25px' }}>
                            {showScore ? (
                                <div>
                                    <Typography variant="h5">Quiz Completed !!!</Typography>
                                    <Typography variant="h6">Total questions: {questions.length}</Typography>
                                    <Typography variant="h6">Your score: {score}</Typography>
                                    <Button variant="contained" color="primary" onClick={handleReset} style={{ marginTop: '1rem', textAlign: 'right', backgroundColor: '#121212' }}>
                                        Reset
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <Typography variant="h5" style={{ marginBottom: '1rem' }}>
                                        {(currentQuestion + 1) + ") " + questions[currentQuestion].question}
                                    </Typography>
                                    <Typography container sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flexWrap: 'wrap',
                                            color: '#000',
                                        }
                                    }>
                                        {
                                            questions[currentQuestion].options.map((option, index) => {
                                                return (
                                                    <Button sx={{ border: '1px solid grey', margin: '6px 0', color: 'black' }} onClick={() => handleAnswerOption(option)}>{option}</Button>
                                                )
                                            })
                                        }
                                    </Typography>
                                </>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </>

    );
};

export default Quiz;
