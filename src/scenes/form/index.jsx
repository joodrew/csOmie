import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Popover,
  Slider,
  Switch,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AddCircle, RemoveCircle, ThumbDown, ThumbUp } from "@mui/icons-material";
import Header from "../../components/Header";
import Principal from "../principal";


const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };


  const checkoutSchema = yup.object().shape({
    id: yup.string().required(),
    aplicativo: yup.string().required("Campo obrigatório"),
    financeiro: yup.string().required("Campo obrigatório"),
    Telefone: yup.string().required("Campo obrigatório"),
    ativacao: yup.date().required("Campo obrigatório"),
    acesso: yup.string().required("Campo obrigatório"),
    ativadoPor: yup.string().required("Campo obrigatório"),
    ligacao1: yup.string().required("Campo obrigatório"),
    ligacao2: yup.string().required("Campo obrigatório"),
    ligacao3: yup.string().required("Campo obrigatório"),
    ligacao4: yup.string().required("Campo obrigatório"),
    ligacao5: yup.string().required("Campo obrigatório"),
    saude: yup.string().required("Campo obrigatório"),
    treinamento: yup.string().required("Campo obrigatório"),
    notaEv: yup.string().required("Campo obrigatório"),
    notaAtendimento: yup.string().required("Campo obrigatório"),
    chat: yup.string().required("Campo obrigatório"),
    CRM: yup.string().required("Campo obrigatório"),
    VENDAS: yup.string().required("Campo obrigatório"),
    NOTAS: yup.string().required("Campo obrigatório"),
    SERVIÇOS: yup.string().required("Campo obrigatório"),
    COMPRAS: yup.string().required("Campo obrigatório"),
    PRODUÇÃO: yup.string().required("Campo obrigatório"),
    FINANÇAS: yup.string().required("Campo obrigatório"),
    BOLETOS: yup.string().required("Campo obrigatório"),
    uso: yup.string(),
    grupo: yup.string().required("Campo obrigatório"),
    nome: yup.string().required("Campo obrigatório"),
    problema: yup.string().required("Campo obrigatório"),
    acao: yup.string().required("Campo obrigatório"),
    solucao: yup.string().required("Campo obrigatório"),
    churn: yup.string().required("Campo obrigatório"),
    projeto: yup.string().required("Campo obrigatório"),
    observaçao: yup.string().required("Campo obrigatório"),
  });

  const initialValues = {
    id: "",
    aplicativo: "",
    financeiro: "",
    Telefone: "",
    ativacao: "",
    acesso: "",
    ativadoPor: "",
    ligacao1: "",
    ligacao2: "",
    ligacao3: "",
    ligacao4: "",
    ligacao5: "",
    saude: "",
    treinamento: "",
    notaEv: "",
    notaAtendimento: "",
    chat: "",
    CRM: "",
    VENDAS: "",
    NOTAS: "",
    SERVIÇOS: "",
    COMPRAS: "",
    PRODUÇÃO: "",
    FINANÇAS: "",
    BOLETOS: "",
    uso: "Calcular automaticamente",
    grupo: "",
    nome: "",
    problema: "",
    acao: "",
    solucao: "",
    churn: "",
    projeto: "",
    observaçao: "",
  };
  const [value, setValue] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showGroupFields, setShowGroupFields] = useState(true);

  const handleSwitchChange = (event) => {
    setShowGroupFields(event.target.checked);
  };

  const handleClickGrupo = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const [linhas, setLinhas] = useState([1]);

  const handleClickAdd = () => {
    if (linhas.length < 5) {
      setLinhas([...linhas, linhas.length + 1]);
    }
  };

  const handleClickRemove = () => {
    if (linhas.length > 1) {
      const newLinhas = [...linhas];
      newLinhas.pop();
      setLinhas(newLinhas);
    }
  };
 
  const [switches, setSwitches] = useState({
    CRM: "Neutro",
    VENDAS: "Neutro",
    NOTAS: "Neutro",
    SERVIÇOS: "Neutro",
    COMPRAS: "Neutro",
    PRODUÇÃO: "Neutro",
    FINANÇAS: "Neutro",
    BOLETOS: "Neutro",
  });
  
const [sliderValues, setSliderValues] = useState({
  CRM: 0,
  VENDAS: 0,
  NOTAS: 0,
  SERVIÇOS: 0,
  COMPRAS: 0,
  PRODUÇÃO: 0,
  FINANÇAS: 0,
  BOLETOS: 0,
});
  const handleChangeSlider = (event, value, name) => {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setSwitches((prevSwitches) => ({
      ...prevSwitches,
      [name]: value === 0 ? "Neutro" : value === -1 ? "Não" : "Sim",
    }));
  setSliderColor(value);
  };
  
  const setSliderColor = (value) => {
    const color = value === -1 ? 'red' : value === 0 ? 'gray' : 'green';
    const style = `
      .MuiSlider-thumb.MuiSlider-thumbColorPrimary {
        box-shadow: 0px 0px 0px 8px ${color}33;
        background-color: ${color};
      }
      .MuiSlider-track {
        background-color: ${color};
      }
    `;
    const styleEl = document.createElement('style');
    styleEl.appendChild(document.createTextNode(style));
    document.head.appendChild(styleEl);
  };


  return (
    <Box m="20px">
      <Header title="CLIENTE" subtitle="Atualizar status cliente" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(8, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 8" },
              }}
            >
              <Container sx={{ gridColumn: "span 8" }}>
                <h2>Dados {"cliente"}</h2>
              </Container>
              <TextField
                size="normal"
                fullWidth
                variant="filled"
                type="text"
                label="Aplicativo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.aplicativo}
                name="aplicativo"
                error={!!touched.aplicativo && !!errors.aplicativo}
                helperText={touched.aplicativo && errors.aplicativo}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                size="normal"
                fullWidth
                variant="filled"
                type="text"
                label="Ativado Por:"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ativado}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                size="normal"
                fullWidth
                variant="filled"
                type="date"
                label="Data de Ativação"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ativacao}
                name="ativacao"
                error={!!touched.ativacao && !!errors.ativacao}
                helperText={touched.ativacao && errors.ativacao}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                size="normal"
                fullWidth
                variant="filled"
                type="text"
                label="Contato Financeiro"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.financeiro}
                name="financeiro"
                error={!!touched.financeiro && !!errors.financeiro}
                helperText={touched.financeiro && errors.financeiro}
                sx={{ gridColumn: "span 5" }}
              />

              <TextField
                size="normal"
                fullWidth
                variant="filled"
                type="text"
                label="Telefone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Telefone}
                name="Telefone"
                error={!!touched.Telefone && !!errors.Telefone}
                helperText={touched.Telefone && errors.Telefone}
                sx={{ gridColumn: "span 3" }}
              />

              <Container sx={{ gridColumn: "span 8" }}>
                <h2>
                  Grupo
                  <Switch
                    defaultChecked
                    color="secondary"
                    onChange={handleSwitchChange}
                  />
                </h2>
              </Container>
              <TextField
                size="normal"
                fullWidth
                variant="filled"
                type="text"
                label="Grupo Empresarial"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.grupo}
                name="grupo"
                error={!!touched.grupo && !!errors.grupo}
                helperText={touched.grupo && errors.grupo}
                sx={{
                  gridColumn: "span 7",
                  display: showGroupFields ? "block" : "none",
                }}
              />
            <Button
        onClick={handleClickGrupo}
        aria-label="CLIENTES"
        edge="end"
        color="secondary"
        variant="contained"
        sx={{ margin: "0 8px" }}
      >
        Clientes
      </Button>

              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Principal hideHeader={true} sx={{ p: 2 }} />
              </Popover>
              <Container sx={{ gridColumn: "span 8" }}>
                <h2>
                  Tentativa de Contato
                  <IconButton onClick={handleClickRemove}>
                    <RemoveCircle sx={{ color: "red" }} />
                  </IconButton>
                  <IconButton onClick={handleClickAdd}>
                    <AddCircle sx={{ color: "green" }} />
                  </IconButton>
                </h2>
              </Container>
              {linhas.map((linha) => (
                <>
                  <TextField
                    key={linha}
                    size="normal"
                    fullWidth
                    variant="filled"
                    type="date"
                    label={`${linha}ª Ligação`}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    key={linha}
                    id={`-${linha}`}
                    label={`${linha}ª Observação`}
                    multiline
                    variant="filled"
                    sx={{ gridColumn: "span 6" }}
                  />
                </>
              ))}

              <Container sx={{ gridColumn: "span 8" }}>
                <h2>Uso do Sistema X%</h2>
              </Container>

             
              <TextField
  size="normal"
  fullWidth
  variant="filled"
  type="none"
  label="CRM"
  onBlur={handleBlur}
  onChange={handleChange}
  InputProps={{
    endAdornment: (
      <>
        <ThumbDown sx={{ marginRight: 2 }}/>
        <Slider
  value={value}
  step={1}
  min={-1}
  max={1}
  name="CRM"
  onChange={(event, value) =>
            handleChangeSlider(event, value, "CRM")
          }
  getAriaValueText={(value) => (value === 0 ? 'Neutro' : value === -1 ? 'Não' : 'Sim')}
  valueLabelDisplay="off"
/>
        <ThumbUp sx={{ marginLeft: 2 }}/>
      </>
    ),
  }}
  value={switches.CRM}
  error={!!touched.CRM && !!errors.CRM}
  helperText={touched.CRM && errors.CRM}
  sx={{ gridColumn: "span 2", marginRight: "5" }}
/>
<TextField
  size="normal"
  fullWidth
  variant="filled"
  type="none"
  label="VENDAS"
  onBlur={handleBlur}
  onChange={handleChange}
  InputProps={{
    endAdornment: (
      <>
        <ThumbDown sx={{ marginRight: 2 }}/>
        <Slider
  value={value}
  step={1}
  min={-1}
  max={1}
  name="VENDAS"
  onChange={handleChangeSlider}
  getAriaValueText={(value) => (value === 0 ? 'Neutro' : value === -1 ? 'Não' : 'Sim')}
  valueLabelDisplay="off"
/>
        <ThumbUp sx={{ marginLeft: 2 }}/>
      </>
    ),
  }}
  value={switches.VENDAS}
  error={!!touched.VENDAS && !!errors.VENDAS}
  helperText={touched.VENDAS && errors.VENDAS}
  sx={{ gridColumn: "span 2", marginRight: "5" }}
/>
<TextField
  size="normal"
  fullWidth
  variant="filled"
  type="none"
  label="NOTAS"
  onBlur={handleBlur}
  onChange={handleChange}
  InputProps={{
    endAdornment: (
      <>
        <ThumbDown sx={{ marginRight: 2 }}/>
        <Slider
  value={value}
  step={1}
  min={-1}
  max={1}
  name="NOTAS"
  onChange={handleChangeSlider}
  getAriaValueText={(value) => (value === 0 ? 'Neutro' : value === -1 ? 'Não' : 'Sim')}
  valueLabelDisplay="off"
/>
        <ThumbUp sx={{ marginLeft: 2 }}/>
      </>
    ),
  }}
  value={switches.NOTAS}
  error={!!touched.NOTAS && !!errors.NOTAS}
  helperText={touched.NOTAS && errors.NOTAS}
  sx={{ gridColumn: "span 2", marginRight: "5" }}
/>
<TextField
  size="normal"
  fullWidth
  variant="filled"
  type="none"
  label="SERVIÇOS"
  onBlur={handleBlur}
  onChange={handleChange}
  InputProps={{
    endAdornment: (
      <>
        <ThumbDown sx={{ marginRight: 2 }}/>
        <Slider
  value={value}
  step={1}
  min={-1}
  max={1}
  name="SERVIÇOS"
  onChange={handleChangeSlider}
  getAriaValueText={(value) => (value === 0 ? 'Neutro' : value === -1 ? 'Não' : 'Sim')}
  valueLabelDisplay="off"
/>
        <ThumbUp sx={{ marginLeft: 2 }}/>
      </>
    ),
  }}
  value={switches.SERVIÇOS}
  error={!!touched.SERVIÇOS && !!errors.SERVIÇOS}
  helperText={touched.SERVIÇOS && errors.SERVIÇOS}
  sx={{ gridColumn: "span 2", marginRight: "5" }}
/>
<TextField
  size="normal"
  fullWidth
  variant="filled"
  type="none"
  label="COMPRAS"
  onBlur={handleBlur}
  onChange={handleChange}
  InputProps={{
    endAdornment: (
      <>
        <ThumbDown sx={{ marginRight: 2 }}/>
        <Slider
  value={value}
  step={1}
  min={-1}
  max={1}
  name="COMPRAS"
  onChange={handleChangeSlider}
  getAriaValueText={(value) => (value === 0 ? 'Neutro' : value === -1 ? 'Não' : 'Sim')}
  valueLabelDisplay="off"
/>
        <ThumbUp sx={{ marginLeft: 2 }}/>
      </>
    ),
  }}
  value={switches.COMPRAS}
  error={!!touched.COMPRAS && !!errors.COMPRAS}
  helperText={touched.COMPRAS && errors.COMPRAS}
  sx={{ gridColumn: "span 2", marginRight: "5" }}
/>
<TextField
  size="normal"
  fullWidth
  variant="filled"
  type="none"
  label="PRODUÇÃO"
  onBlur={handleBlur}
  onChange={handleChange}
  InputProps={{
    endAdornment: (
      <>
        <ThumbDown sx={{ marginRight: 2 }}/>
        <Slider
  value={value}
  step={1}
  min={-1}
  max={1}
  name="PRODUÇÃO"
  onChange={handleChangeSlider}
  getAriaValueText={(value) => (value === 0 ? 'Neutro' : value === -1 ? 'Não' : 'Sim')}
  valueLabelDisplay="off"
/>
        <ThumbUp sx={{ marginLeft: 2 }}/>
      </>
    ),
  }}
  value={switches.PRODUÇÃO}
  error={!!touched.PRODUÇÃO && !!errors.PRODUÇÃO}
  helperText={touched.PRODUÇÃO && errors.PRODUÇÃO}
  sx={{ gridColumn: "span 2", marginRight: "5" }}
/>
<TextField
  size="normal"
  fullWidth
  variant="filled"
  type="none"
  label="FINANÇAS"
  onBlur={handleBlur}
  onChange={handleChange}
  InputProps={{
    endAdornment: (
      <>
        <ThumbDown sx={{ marginRight: 2 }}/>
        <Slider
  value={value}
  step={1}
  min={-1}
  max={1}
  name="FINANÇAS"
  onChange={handleChangeSlider}
  getAriaValueText={(value) => (value === 0 ? 'Neutro' : value === -1 ? 'Não' : 'Sim')}
  valueLabelDisplay="off"
/>
        <ThumbUp sx={{ marginLeft: 2 }}/>
      </>
    ),
  }}
  value={switches.FINANÇAS}
  error={!!touched.FINANÇAS && !!errors.FINANÇAS}
  helperText={touched.FINANÇAS && errors.FINANÇAS}
  sx={{ gridColumn: "span 2", marginRight: "5" }}
/>
<TextField
  size="normal"
  fullWidth
  variant="filled"
  type="none"
  label="BOLETOS"
  onBlur={handleBlur}
  onChange={handleChange}
  InputProps={{
    endAdornment: (
      <>
        <ThumbDown sx={{ marginRight: 2 }}/>
        <Slider
  value={value}
  step={1}
  min={-1}
  max={1}
  name="BOLETOS"
  onChange={handleChangeSlider}
  getAriaValueText={(value) => (value === 0 ? 'Neutro' : value === -1 ? 'Não' : 'Sim')}
  valueLabelDisplay="off"
/>
        <ThumbUp sx={{ marginLeft: 2 }}/>
      </>
    ),
  }}
  value={switches.BOLETOS}
  error={!!touched.BOLETOS && !!errors.BOLETOS}
  helperText={touched.BOLETOS && errors.BOLETOS}
  sx={{ gridColumn: "span 2", marginRight: "5" }}
/>

              <Container sx={{ gridColumn: "span 8" }}>
                <h2>Tratativa</h2>
              </Container>
              <TextField
  size="normal"
  fullWidth
  variant="filled"
  type="number"
  label="Nota EV"
  onBlur={handleBlur}
  onChange={handleChange}
  value={values.notaEv}
  name="notaEv"
  error={!!touched.notaEv && !!errors.notaEv}
  helperText={touched.notaEv && errors.notaEv}
  InputProps={{
    inputProps: {
      min: 0,
      max: 5,
    },
  }}
  sx={{ gridColumn: "span 1" }}
/>

<TextField
  size="normal"
  fullWidth
  variant="filled"
  type="number"
  label="Nota Atendimento"
  onBlur={handleBlur}
  onChange={handleChange}
  value={values.notaAtendimento}
  name="notaAtendimento"
  error={!!touched.notaAtendimento && !!errors.notaAtendimento}
  helperText={touched.notaAtendimento && errors.notaAtendimento}
  InputProps={{
    inputProps: {
      min: 0,
      max: 10,
    },
  }}
  sx={{ gridColumn: "span 1" }}
/>
              <TextField
                size="normal"
                fullWidth
                variant="filled"
                type="none"
                label="Ja utilizou o chat"
                onBlur={handleBlur}
                onChange={handleChange}
                disabled={true}
                InputProps={{
                  endAdornment: (
                    <div
                      style={{
                        display: "inline-flex",
                        VerticalAlign: "text-bottom",
                        BoxSizing: "inherit",
                        textAlign: "center",
                        AlignItems: "center",
                      }}
                    >
                      <Button
                        sx={{ marginLeft: 2 }}
                        aria-label="NÃO"
                        edge="end"
                        color="error"
                        variant="outlined"
                      >
                        NÃO
                      </Button>
                      <Button
                        sx={{ marginLeft: 2 }}
                        aria-label="SIM"
                        edge="end"
                        color="secondary"
                        variant="outlined"
                      >
                        SIM
                      </Button>
                    </div>
                  ),
                }}
                value={values.chat}
                name="chat"
                error={!!touched.chat && !!errors.chat}
                helperText={touched.chat && errors.chat}
                sx={{ gridColumn: "span 2" }}
              />
             <TextField
  size="normal"
  fullWidth
  variant="filled"
  select
  label="Problema Principal"
  onBlur={handleBlur}
  onChange={handleChange}
  value={values.address2}
  name="problema"
  error={!!touched.problema && !!errors.problema}
  helperText={touched.problema && errors.problema}
  sx={{ gridColumn: "span 4" }}
>
  <MenuItem value="CRM">CRM</MenuItem>
  <MenuItem value="Vendas">Vendas</MenuItem>
  <MenuItem value="Serviços">Serviços</MenuItem>
  <MenuItem value="Compras">Compras</MenuItem>
  <MenuItem value="Finanças">Finanças</MenuItem>
  <MenuItem value="Produção">Produção</MenuItem>
  <MenuItem value="Integração contábil">Integração contábil</MenuItem>
  <MenuItem value="Parceiro Omie">Parceiro Omie</MenuItem>
  <MenuItem value="Implantação">Implantação</MenuItem>
  <MenuItem value="Sem dúvidas">Sem dúvidas</MenuItem>
  <MenuItem value="Sem Contato">Sem Contato</MenuItem>
  <MenuItem value="Retornar Contato">Retornar Contato</MenuItem>
  <MenuItem value="Cancelado">Cancelado</MenuItem>
  <MenuItem value="Notas">Notas</MenuItem>
  <MenuItem value="Boleto">Boleto</MenuItem>
  <MenuItem value="Omie Cash">Omie Cash</MenuItem>
  <MenuItem value="Parceiros">Parceiros</MenuItem>
  <MenuItem value="Suporte">Suporte</MenuItem>
  <MenuItem value="Estoque">Estoque</MenuItem>
  <MenuItem value="Conciliação Bancária">Conciliação Bancária</MenuItem>
  <MenuItem value="Migração">Migração</MenuItem>
</TextField>

<TextField
size="normal"
fullWidth
variant="filled"
select
label="Ação"
onBlur={handleBlur}
onChange={handleChange}
value={values.acao}
name="acao"
error={!!touched.acao && !!errors.acao}
helperText={touched.acao && errors.acao}
sx={{ gridColumn: "span 2" }}>

  <MenuItem value="Buscar Solução">Buscar Solução</MenuItem>
  <MenuItem value="Caixa Postal">Caixa Postal</MenuItem>
  <MenuItem value="Cancelado">Cancelado</MenuItem>
  <MenuItem value="Cancelamento temporário">Cancelamento temporário</MenuItem>
  <MenuItem value="Enviado ao Suporte">Enviado ao Suporte</MenuItem>
  <MenuItem value="Enviar para Ht">Enviar para Ht</MenuItem>
  <MenuItem value="Nenhuma">Nenhuma</MenuItem>
  <MenuItem value="Retornar Contato">Retornar Contato</MenuItem>
  <MenuItem value="Solicitar informações">Solicitar informações</MenuItem>
</TextField>
                
<TextField
size="normal"
fullWidth
variant="filled"
select

label="Solução"
onBlur={handleBlur}
onChange={handleChange}
value={values.solucao}
name="solucao"
error={!!touched.solucao && !!errors.solucao}
helperText={touched.solucao && errors.solucao}
sx={{ gridColumn: "span 2" }}>

  <option value="">Selecione uma opção</option>
  <option value="Aguardando Retorno">Aguardando Retorno</option>
  <option value="Buscar Solução">Buscar Solução</option>
  <option value="Resolvido">Resolvido</option>
  <option value="Em Implantação">Em Implantação</option>
  <option value="Nenhuma">Nenhuma</option>
  <option value="Cancelado">Cancelado</option>
  <option value="Retornar contato">Retornar contato</option>
</TextField>
<TextField
  size="normal"
  fullWidth
  variant="filled"
  select
  label="Motivo do Churn"
  onBlur={handleBlur}
  onChange={handleChange}
  value={values.churn}
  name="churn"
  error={!!touched.churn && !!errors.churn}
  helperText={touched.churn && errors.churn}
  sx={{ gridColumn: "span 2" }}
>
  <MenuItem value="CRM">CRM</MenuItem>
  <MenuItem value="Vendas">Vendas</MenuItem>
  <MenuItem value="Serviços">Serviços</MenuItem>
  <MenuItem value="Compras">Compras</MenuItem>
  <MenuItem value="Produção">Produção</MenuItem>
  <MenuItem value="Finanças">Finanças</MenuItem>
  <MenuItem value="Parceiro">Parceiro</MenuItem>
  <MenuItem value="Suporte">Suporte</MenuItem>
  <MenuItem value="Integrações">Integrações</MenuItem>
  <MenuItem value="Valor">Valor</MenuItem>
  <MenuItem value="Interface">Interface</MenuItem>
  <MenuItem value="Funcionalidades">Funcionalidades</MenuItem>
  <MenuItem value="Reestruturação interna">Reestruturação interna</MenuItem>
</TextField>

<TextField
size="normal"
fullWidth
variant="filled"
label="Projeto"
select
onBlur={handleBlur}
onChange={handleChange}
value={values.projeto}
name="projeto"
error={!!touched.projeto && !!errors.projeto}
helperText={touched.projeto && errors.projeto}
sx={{ gridColumn: "span 2" }}
>
  <MenuItem value="Cliente Carteira">Cliente Carteira</MenuItem>
  <MenuItem value="Cliente Novo">Cliente Novo</MenuItem>
  <MenuItem value="Cancelado">Cancelado</MenuItem>
  <MenuItem value="Pendente">Pendente</MenuItem>
</TextField>
              <TextField
                id="filled-multiline-static"
                label="Observações"
                multiline
                rows={4}
                variant="filled"
                sx={{ gridColumn: "span 8" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                SALVAR
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
