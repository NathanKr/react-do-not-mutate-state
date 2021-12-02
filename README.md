<h2>Motivation<h2>
 Every one in react should know that mutating the state is a big no no , but in most cases it seem to work correctly. 
 Here i will show a use case that fails when the state is mutated

<h2>PureComponent<h2>
PureComponent implements shouldComponentUpdate with a shallow prop and state comparison. Thus mutating the state will give no render in PureComponent 


<h2>Setup</h2>
<ul>
<li>npm i</li>
<li>npm run dev</li>
</ul>



