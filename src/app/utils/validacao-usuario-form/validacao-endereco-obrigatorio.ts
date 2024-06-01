import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const validacaoEnderecoObrigatorio: ValidatorFn  = (control: AbstractControl): ValidationErrors | null => {
    const grupoEndereco = control as FormGroup;

    const controlsParaChecar = Object.keys(grupoEndereco.controls).filter(
      (controlKey) => controlKey !== 'tipo' && controlKey !== 'tipoDescricao'
    );

    const possuiAlgumTexto = controlsParaChecar.some((controlKey) => possuiTexto(grupoEndereco.get(controlKey)));

    for(const controlName of controlsParaChecar) {
        const control = grupoEndereco.get(controlName);
        
        if (possuiAlgumTexto) {
            if (!control?.value) {
                control?.setErrors({ obrigatorio: true });
                control?.markAllAsTouched();
            }
            else{
                control?.setErrors(null);
            }
        }else{
            control?.setErrors(null);
        }
    }

    return null;
};

const possuiTexto = (control: AbstractControl | null): boolean => {
    return control && control.value && control.value.toString().trim().length > 0;
};