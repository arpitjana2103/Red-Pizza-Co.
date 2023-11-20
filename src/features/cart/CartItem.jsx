/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utilities/helpers';
import DeleteItem from './DeleteItem';

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item;

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p>
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <DeleteItem pizzaId={pizzaId}>Remove</DeleteItem>
            </div>
        </li>
    );
}

export default CartItem;
