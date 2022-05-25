import React from 'react';
import MyInput from './input/MyInput';
import MySelect from './select/MySelect';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        plaseholder="Поиск..."
      />
      <MySelect
        value={filter.sortType}
        onChange={selectedSort => setFilter({...filter, sortType: selectedSort})}
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  );
};

export default PostFilter;