import { Collapse } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useParams } from 'react-router-dom'

import { fetchMenu } from '../../reducers/RestaurantMenu.reducer'
import { FoodGroup } from './style';
import { RootState } from '../../store/configureStore.store'
import { FoodProps, ParamProps } from '../../global/types'

interface isOpen {
    id: number
    value: false
}

export const Collapsible = () => {
    const { data } = useSelector((state: RootState) => state.RestaurantMenu);
    const dispatch = useDispatch();
    const { id } = useParams<ParamProps>();
    let foodGroups: string[] = []

    useEffect(() => {
        fetchMenu(dispatch, id)
    }, [dispatch, id])

    const handleClick = (foodGroup: number) => {
        console.log(foodGroup)
        console.log(isOpen);
        let valueToChange = isOpen.filter((item, index) => foodGroup === item.id);
        console.log(valueToChange);
    };

    data.map((item, index) => {
        !foodGroups.includes(item.group) && foodGroups.push(item.group);
    })

    const filteredFoods = (foodGroup: string) => {
        return data.filter(item => item.group === foodGroup)
    }

    let [isOpen, setIsOpen] = useState<isOpen[]>(Array(foodGroups.length));


    return (
        <>
            <ul>
                {foodGroups.map((group, groupIndex) => {
                    return (
                        <div key={groupIndex}>
                            <FoodGroup onClick={() => handleClick(groupIndex)}>
                                <h3>{group}</h3>
                                <FiChevronRight />
                            </FoodGroup>

                            {
                                filteredFoods(group).map((item, index) => {
                                    return (
                                        <Collapse key={index} in={false}>
                                            <p>{item.name}</p>
                                        </Collapse>
                                    )
                                })
                            }
                        </div>

                    )
                })}
            </ul>
        </>
    )
}