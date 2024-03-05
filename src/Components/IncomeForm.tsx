import { Button } from "./Button";

export function IncomeForm ({handleChangeSource , handleSubmint , handleChangeAmount}) {
return (
    <form onSubmit={handleSubmint}>
<div>
<label htmlFor='resource'>Income source</label>
<input type='text' name='resource' id='resource' placeholder='write here' onChange={handleChangeSource} />
</div>

<div>
<label htmlFor='amount'>Amount of income</label>
<input type='text' name='amount' id='amount' placeholder='wow' onChange={handleChangeAmount}/>
</div>

<div>
<label htmlFor='date'>Date of income</label>
<input type='date' name='date' id='date'/>
</div>
<Button label='Add income'/>
    </form>  
)
}