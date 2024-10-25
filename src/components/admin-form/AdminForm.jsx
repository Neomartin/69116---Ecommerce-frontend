import { useForm } from "react-hook-form";
import { FORM_TYPES } from "../../config/form-config";

export default function AdminForm({ type }) {
    const { register } = useForm();
    const form = FORM_TYPES[type];

    function createFormInputs() {
        let formInputs = form.map((inputTypeElement, index) => {
            if(inputTypeElement.tag === "input") {
                return (
                    <div className="input-group" key={index}>
                        <label htmlFor={inputTypeElement.name}>{inputTypeElement.viewValue}</label>
                        <input    
                                type={inputTypeElement.type} 
                                {
                                    ...register(inputTypeElement.name, inputTypeElement.controls
                                    
                                )} />
                    </div>
                )
            }
            
            
        })

        return formInputs;
    }

    

  return (
    <div>AdminForm
        <form action="">

            { createFormInputs()}
        </form>

    </div>
  )
}
