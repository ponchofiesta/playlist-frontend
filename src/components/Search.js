import { InputGroup, Input, Icon} from 'rsuite';
import { useRef } from 'react';

function Search({onSearch}) {

    const input = useRef(null);

    const search = () => {
        if (onSearch) {
            onSearch(input.current.value);
        }
    };

    return (
        <InputGroup inside>
            <Input ref={input} onPressEnter={search}/>
            <InputGroup.Button onClick={search}>
                <Icon icon="search" />
            </InputGroup.Button>
        </InputGroup>
    );
}

export default Search;