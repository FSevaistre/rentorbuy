### Import

```js static
import { ContentTable } from 'bricks'
```

### Usage

```jsx static
<ContentTable title="Taux par banque">
  {`Caisse d'Épargne;1,25 %;1,25 %
    Boursorama;1,25 %;1,25 %
    ING;1,25 %;1,25 %
    La Banque Postale;1,25 %;1,25 %`}
</ContentTable>
```

### Examples

#### Head without title

```jsx
<ContentTable hideTitle headerRows={1} title="Taux par banque">
  {`Banques;Taux 1;Taux 2
    Caisse d'Épargne;1,25 %;1,25 %
    Boursorama;1,25 %;1,25 %
    ING;1,25 %;1,25 %
    La Banque Postale;1,25 %;1,25 %`}
</ContentTable>
```

#### Head and foot without title

```jsx
<ContentTable hideTitle headerRows={1} footerRows={1} title="Taux par banque">
  {`Banques;Taux 1;Taux 2
    Caisse d'Épargne;1,25 %;1,25 %
    Boursorama;1,25 %;1,25 %
    ING;1,25 %;1,25 %
    Total;3,75 %;3,75 %`}
</ContentTable>
```

#### Head, foot and lines head without title

```jsx
<ContentTable hideTitle headerColumns={1} headerRows={1} footerRows={1} title="Taux par banque">
  {`Banques;Taux 1;Taux 2
    Caisse d'Épargne;1,25 %;1,25 %
    Boursorama;1,25 %;1,25 %
    ING;1,25 %;1,25 %
    Total;3,75 %;3,75 %`}
</ContentTable>
```

#### Normal without title

```jsx
<ContentTable hideTitle title="Taux par banque">
  {`Caisse d'Épargne;1,25 %;1,25 %
    Boursorama;1,25 %;1,25 %
    ING;1,25 %;1,25 %
    La Banque Postale;1,25 %;1,25 %`}
</ContentTable>
```

#### Normal with title

```jsx
<ContentTable title="Taux par banque">
  {`Caisse d'Épargne;1,25 %;1,25 %
    Boursorama;1,25 %;1,25 %
    ING;1,25 %;1,25 %
    La Banque Postale;1,25 %;1,25 %`}
</ContentTable>
```
