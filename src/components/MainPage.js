import React, { useEffect ,useState} from "react";
import {Form,Button} from 'react-bootstrap';
import ReposList from './ReposList';
import axios from 'axios';
import ReadMe from "./ReadMe";


function MainPage() { 
        const [repos,setRepos]=useState([]);

        const [search,setSearch]=useState('khprasad123');
        
        const [query,setQuery]=useState(search);

        const [repoName,setRepoName]=useState(null);
        
        const [readMe,setReadMe]=useState(null);

        const [show,setShow]=useState(false);
        
        const url1=`https://api.github.com/users/${query}/repos`;
        const url2=`https://api.github.com/repos/${query}/${repoName}/readme`;

        useEffect(()=>{
            getRepos();
            fetchReadme();
         },[query,repoName]);
       
        const getRepos=async ()=>{
            axios.get(url1)
                 .then(res=>{
                        console.log(res.data);
                        setRepos(res.data);
                 })
                 .catch(
                    console.log("Some Error While Fetching the Repos Bro")
                 );
        }

        const fetchReadme=async ()=>{
            if(repoName!==null){
                axios.get(url2)
                .then(res=> {
                    console.log(res.data);
                    setReadMe(res.data);
                })
                .catch(
                    console.log("full problem bro")
                );
            }
        }

        const onEnter=(e)=>{
            e.preventDefault();
            setQuery(search);
        }
        const onType=(e)=>{
            setSearch(e.target.value);
            setRepos([]);
            setReadMe(null);
            setRepoName(null);
        }   
        
        const getReadMe=(name)=>{
            setRepoName(name);
            setShow(true);
        }
        const close=()=>{
            setShow(false);
            setReadMe(null);
        }
        return (
           <div>
                <Form onSubmit={onEnter}>
                    <Form.Control type="text" placeholder="Enter Git-Hub Username" value={search} onChange={onType} />
                    <Button variant="primary" type="submit" onClick={onEnter} >
                            Submit
                     </Button>
                </Form>
                Repo List :
                    <div>
                    { true?(repos.map(repo=>(
                         <div onClick={()=>getReadMe(repo.name)} key={repo.node_id}>
                            <ReposList 
                                key={repo.node_id}
                                name={repo.name}
                            />
                        </div>
                        ))):(null) 
                    }
                    </div>
                    
                <ReadMe
                  content={readMe}
                  onHide={close}
                  show={show}
                />    

           </div>
    );  
}

export default MainPage;