import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList (props) {
    return (
        <div className="expenses">
            {props.items.map(item => (
                <ExpenseItem
                    key={item.id}
                    title={item.title} 
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </div>
    );
}

export default ExpenseList;