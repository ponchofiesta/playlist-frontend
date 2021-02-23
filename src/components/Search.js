import { InputGroup, Input, Icon} from 'rsuite';
import { useState } from 'react';

function Search({onSearch}) {

    const [value, setValue] = useState("");

    const onChange = val => {
        setValue(val);
    };

    const search = () => {
        if (onSearch) {
            onSearch(value);
        }
    };

    return (
        <InputGroup inside>
            <Input onChange={onChange} onPressEnter={search} placeholder="Suche" />
            <InputGroup.Button onClick={search}>
                <Icon icon="search" />
            </InputGroup.Button>
        </InputGroup>
    );
}

export default Search;