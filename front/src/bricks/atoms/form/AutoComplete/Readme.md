### Import
```js static
import { AutoComplete } from 'pretto-ui'
```

### Usage
```html
<AutoComplete results={Array} />
```

### Examples
#### Basic:
```jsx
const pets = [
  {value: "pet_1", label: "Pig"},
  {value: "pet_2", label: "Cat"},
  {value: "pet_3", label: "Dog"},
  {value: "pet_4", label: "Shark"},
  {value: "pet_5", label: "Elephant"},
  {value: "pet_6", label: "Hamster"},
  {value: "pet_7", label: "Mouse"},
  {value: "pet_8", label: "Crocodile"}
];
initialState = {
  selectedValue: null,
  searchValue: '',
  selected: "none... yet",
  placeholder: "What’s your favourite pet?",
  pets: pets
};
handleSelect = (result) => {
  setState({selected: result.value, value: result.label});
};
handleSearch = searchValue => {
  let newPets = pets.filter(pet=>pet.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
  if (searchValue === '') newPets = pets
  setState({ searchValue, pets: newPets });
};
handleAfterOpen = key => {
  handleSearch(key);
};
<div>
  <AutoComplete
    selectedValue={state.value}
    onSelect={handleSelect}
    onAfterOpen={handleAfterOpen}
    results={state.pets}
    searchValue={state.searchValue}
    onSearch={handleSearch}
    placeholder={state.placeholder}
    searchfieldPlaceholder="Pick one!" />
  <div>chosen pet: {state.selected}</div>
</div>
```

#### Format: form & type: check
```jsx
const countries = [
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "us", label: "U.S.A" },
  { value: "in", label: "India" },
  { value: "it", label: "Italy" },
  { value: "ch", label: "China" },
  { value: "ru", label: "Russia" },
  { value: "ja", label: "Japan" }
];
initialState = {
  value: "",
  selected: [],
  placeholder: "Select a country",
  countries
};
handleSelect = (result) => {
  const checked = !state.countries.find(c => c.value === result.value).checked
  const newCountries = [...state.countries]
  newCountries.find(c => c.value === result.value).checked = checked
  setState({selected: result.value, value: result.label, countries: newCountries});
  console.log(state.countries)
};
handleSearch = value => {
  if(value === '') setState({ countries })
  else
    setState({
      countries: countries.filter(country => country.label.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    })
};
<div>
  <AutoComplete
    format="form"
    value={state.value}
    onSelect={handleSelect}
    onSearch={handleSearch}
    results={state.countries}
    placeholder={state.placeholder}
    type="check"
    searchfieldPlaceholder="Pick one!"
    checkboxes={countries.filter(c => state.countries.find(cc => c.value === cc.value && cc.checked))}
    />
  <div>chosen country: {state.selected.length > 0 ? state.selected : 'None... yet!'}</div>
</div>
```
