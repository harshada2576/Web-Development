import React from 'react'
import Button from 'react-bootstrap/Button';

const FilterBar = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
                <Button variant="outline-secondary" style={{ cursor: 'pointer' }}>All</Button>
                <Button variant="outline-secondary" style={{ cursor: 'pointer' }}>Active</Button>
                <Button variant="outline-secondary" style={{ cursor: 'pointer' }}>Completed</Button>
            </div>

        </>
    )
}

export default FilterBar