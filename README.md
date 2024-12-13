# Namaste React learing by Sravani

# clone the App
npm install
npm start


# Parcel
- Dev bulid
- local server
- HMR - Hot Module Replacement
- File watching Algorithm - written in C++
- caching - faster builds
- Image Optimization
- Minification
- bundling
- compress
- consistent hashing 
- code splitting
- differential bundling - support older browsers
- diagnostic
- Error handling
- https
- tree shaking - remove unused code
- different dev and prod bundles

pendency array - useEffect will trigger after every render of that component
if dependency array is empty [] - useEffect will trigger on first render of the component, ( we can use at the time of api call );
if dependency array is having a variable- it will call on everytime that variable is updated. (eg: searchText)

# class comp

    constructor(props){
        super(props); // super will calls the parent class constructor
        console.log(this.props); // we can access the props here
        this.state = {
            count : 0
        }
    }

    constructor(props){
        super(); // super will calls the parent class constructor
        console.log(this.props); // we can not access the props  - Undefined
    }

    this.setState({
        count : this.state.count + 1 // never update the state directly. use setState
    })

    componentDidMount // it calls after intial render 

    componentDidUpdate // calls after every subsequence or every re-render of the comp

    componentWillUnmount // calls before unmounting. clearing timers etc.


# windows + ; --> emoji shortcut

# 2 ways of lazy loading in app js. after serve individual files will create in dist folder






