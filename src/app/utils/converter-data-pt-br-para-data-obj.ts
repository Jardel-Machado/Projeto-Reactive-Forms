export const converterDataPtBrParaDataObj = (data: string): Date | null => {
    if(!data){
        return null;
    }

    const [dia, mes, ano] = data.split('/').map(Number);
    
    if(dataValida(dia, mes, ano)){
        return new Date(ano, mes - 1, dia);
    }

    return null;
};

const dataValida = (dia: number, mes: number, ano: number): boolean => {
    const data = new Date(ano, mes - 1, dia);

    return (
        data.getDate() === dia &&
        data.getMonth() === mes - 1 &&
        data.getFullYear() === ano
    );
};