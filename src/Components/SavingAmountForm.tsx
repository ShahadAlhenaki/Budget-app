import { Button } from "./Button";


export function SavingAmountForm ({handleChangeSource , handleSubmint , handleChangeAmount}) {
return (
    <form onSubmit={handleSubmint}>
<div>
<label htmlFor='saving_amount'>Transfer to saving account</label>
<input type='text' name='resource' id='saving_amount' placeholder='' onChange={handleChangeSource} />
</div>

 <Button label='Transfer'/> 
    </form>  
)
}