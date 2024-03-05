import { Button } from "./Button";

export function ExpenseForm ({handleChangeSource , handleSubmint , handleChangeAmount}) {
return (
    <form onSubmit={handleSubmint}>
<div>
<label htmlFor='resource'>Expense source</label>
<input type='text' name='resource' id='resource' placeholder='write here' onChange={handleChangeSource} />
</div>

<div>
<label htmlFor='amount'>Amount of expense</label>
<input type='text' name='amount' id='amount' placeholder='wow' onChange={handleChangeAmount}/>
</div>

<div>
<label htmlFor='date'>Date of expense</label>
<input type='date' name='date' id='date'/>
</div>
<Button label='Add expense'/>
    </form>  
)
}