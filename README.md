# Date Picker
![made-with-node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![made-with-react](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=FFFFFF) ![made-with-sass](	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) 
![GitHub repo size](https://img.shields.io/github/repo-size/StephaneLi/lib_typescript-datepicker-react)
![GitHub jest](https://img.shields.io/badge/coverage-100%25-yellow)  

A simple customizable react datepicker in typescript.  
From project 14 OpenClassrooms, react app developer  
  
[Projet 14 Openclassroms](https://github.com/StephaneLi/StephaneLieumont_14_03062022)

## Installation
```npm install @stephane1920/ts-datepicker-react```  
or  
```yarn add @stephane1920/ts-datepicker-react```

## Usage Date Picker input
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import DatePicker from '@stephane1920/ts-datepicker-react';

const SomeComponent = () => {
  return (
    <div>
      <DatePicker label='date picker' name='date-picker' />
    </div>
  )
};
```

## Usage Date Picker calendar
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import DatePickerCalendar from '@stephane1920/ts-datepicker-react';

const SomeComponent = () => {
  return (
    <div>
      <DatePickerCalendar />
    </div>
  )
};
```

## Props
|Label|Type|Required|Default|
|:----|:----:|:------:|:----:|
|label|string|yes|N/A|
|name|string|yes|N/A|
|errorMessage|string|no|N/A|
|error|boolean|no|```false```|
|value|string|no|```''```|
|lang|string|no|```'fr-FR'```|
|year|number|no|current year|
|month|number|no|current month|
|day|number|no|current day|
|intervalYearSelection|number[]|no|```[current year - 90, current year]```|
|zIndex|number|no|```999```|
|elevationPicker|boolean|no|```false```|
|headerPickerColor|string|no|```'#059ECE'```|
|textColor|string|no|```'#DADCE0'```|
|focusColor|string|no|```'#70757A'```|
|errorColor|string|no|```'#059ECE'```|
|borderColor|string|no|```'#EF6C6C'```|
|borderRadius|string|no|```'5px'```|
|className|string|no|N/A|
|onSelect|callback Function|no|N/A|

## License  
ISC