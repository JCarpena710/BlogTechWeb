import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
//  * imporatar nuestra funcion login desde service
import { login } from "../../services/auth";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({
          ...inputs,
          [name]: value,
        }));
    };
    
    const handleSubmit = async () => {
        const response = await login(inputs);
        console.log(response);
    };

    return(
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h1>Login</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nulla quaerat sint consequatur nostrum perferendis animi mollitia, facere doloremque ad nobis omnis fuga, eveniet quia, ratione a provident nemo accusamus!</p>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                 <TextField label="E-mail" type ="email" name="email" value={inputs.email} onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Password" type="password" name="password" value={inputs.password} onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <Button onClick={handleSubmit} variant="outlined" color="secondary" sise="large" fullWidth>Iniciar Sesión</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <h1>Ponemos un mensaje o una foto</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nulla quaerat sint consequatur nostrum perferendis animi mollitia, facere doloremque ad nobis omnis fuga, eveniet quia, ratione a provident nemo accusamus!</p>
                    </Grid>
                </Grid>
            </Container>
    )
};

export default Login;




