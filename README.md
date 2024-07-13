# Namaste React learing by Sravani

# two types of Export/Imports

# -Default export / import
 export default component;
 import component from 'path';

# -named export/import
 export const component;
 import { component } from "path";

# React hooks - Normal js utility function which is writen by fb developers in side react;

# useEffect(()=>{},[])
if no dependency array - useEffect will trigger after every render of that component
if dependency array is empty [] - useEffect will trigger on first render of the component, ( we can use at the time of api call );
if dependency array is having a variable- it will call on everytime that variable is updated. (eg: searchText)



