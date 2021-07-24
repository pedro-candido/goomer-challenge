import { Collapse, CollapseProps } from 'react-bootstrap';
import { useState } from 'react';

export const Collapsible = () => {
    const [ isOpen, setIsOpen ] = useState<CollapseProps>(false);

    return (
        <>
            <Collapse in={isOpen}>
                <div>
                    Teste
                </div>
            </Collapse>
        </>
    )
}