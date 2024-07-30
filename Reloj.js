let segundero = 0;
let minutero = 0;
let horario = 1;
let dia = 0;

while (dia < 5)
{
    console.log("''" + segundero);
    console.log("'" + minutero);
    console.log("Hora: " + horario);
    console.log(dia);

    segundero = segundero + 1;
    if (segundero == 60)
    {
        segundero = 0;
        minutero = minutero + 1
    }

    if (minutero == 60)
    {
        minutero = 0;
        horario = horario + 1;
    }

    if (horario == 23 && minutero == 59 && segundero == 59)
    {
        horario = 0;
        dia = dia + 1;  
    }
}

