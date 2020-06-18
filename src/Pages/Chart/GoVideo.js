import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';




const GoVideo = (props) => {

  const [ musicState, setMusicState ] = useState([]);
  const [ test, setTest ] =useState([]);
  const [ saw, setSaw ] = useState([]);
  const [ modalState, setModalState ] = useState(false);
  const [ likeState, setLikeState ] = useState(false);
  const [ toggle, setToggle ] = useState(true);
  const [ gokState, setGokState ] = useState(true);

 
  // useEffect(() => {

  //   fetch("/jh_data/jh.json")
  //   .then((res) => res.json())
  //   .then((res) => setMusicState(res.data));

    // setMusicState(
    //   musicState.map((d) => {
    //     return{
    //       id: d.id,
    //       album: d.album,
    //       img: d.m_url,
    //       name: d.name,
    //       vocal: d.vocal,
    //       select:false,
    //     };
    //   })
    // );
    // setMusicState(musicState);

    
  // }, []);

  const Over = () => {
    setGokState(!gokState);
  }
  // const Smart = (mart) =>{
  //   setLikeState(!likeState)
  //   setToggle(!toggle)
  // }

  // console.log("zsk",saw);
  // console.log("sc",gokState);
  

  return (
        // <List>
        //   <li className="ListItem">
        //       <div className="ListImg">
        //         <img src={props.m_url} style={{zIndex:"999999"}} alt=""/>

        //       </div>

        //   </li>


        // </List>
        
          <Tbody>
            
            {/* {musicState.map((d, i) => ( */}
              
                <OneList>
                  <SelectOne onMouseEnter={()=> Over()} onMouseLeave={()=> Over()}>
                      {/* <div className="kmk">
                        <img 
                            src={props.img} className="mk" alt=""/>
                      </div> */}
                      <Part>
                      <div className="kmk">
                        <img 
                            src={props.img} className="mk" alt=""/>
                      </div>
                        <Tl>
                          <div style={{display:"flex", flexDirection:"row"}}>
                            <Ta>{props.id}.</Ta>
                            <Td style={{color: "black"}}>{props.name}</Td>
                          </div>
                          <Tc>{props.vocal}</Tc>
                        </Tl>
                      </Part>
                  </SelectOne>
                </OneList>
                
              
            {/* ))} */}
            
          </Tbody>
        
  );
}


const beforeIcon = css`
display: block;
content: "";
background: url(${icon}) no-repeat;
`;

const afterIcon = css`
display: inline-block;
content: "";
background: url(${icon}) no-repeat;
`;

// const List = styled.div`
//   margin-left: 16px;
//   display: flex;
//   flex-direction: column;
//   margin-top: 10px;
//   flex-wrap:wrap;
//   width:500px;
//   max-width: 1270px;
//   .ListItem{
//    display: flex;
//    flex-direction: row;
//    align-items: center;
//    width: 50%;
//    .ListImg{
//     width:100%;
//      height:100%;
//      display: flex;
//      align-items: center;
//      justify-content: flex-start;
//      margin: 10px;     
//      position: relative;
//    }
//   }

// `


const Tbody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 10px;
  flex-wrap:wrap;
  width:300px;
  /* max-width: 964px; */
  height:100%;

`
const OneList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  


`

const SelectOne = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin: 10px;
    /* border-bottom: 1px solid aliceblue; */
    position: relative;
    /* .kmk{
      /* margin-left:20px; */

      /* .mk{
      width: 310px;
      height: 174px; */
    /* } */ 
    /* } */
    
    /* &:hover{
      /* background: rgb(228, 228, 228);; */
      /* cursor: pointer;
      .kmk{
        background-color: rgba(0,0,0,.8);
      }
      .mk{
        /* background: rgb(228, 228, 228); */
        /* opacity:0.3; */
      /* }
      &::after  {
      ${afterIcon}
        position: absolute;
        top: 20px;
        bottom: 20px;
        left: 5px;
        background-position: -491px -439px;
        width: 16px;
        height: 20px;
        margin-left: 10px;
        margin-top:0;
        color:black;
        transition: height 0.5s ease-in,opacity 0.5s ease-in; */
     /* }  */
    /* } */
    
    /* &.imgShowing-false{
        opacity: 1;
        pointer-events: visible;
        margin: auto;
        
    } */

`
// const Gok = styled.img`
//   src : url(${props => props.src});
//   width:40px;
//   height:40px;

// `


const Mplay = styled.div`
        &::after {
        ${afterIcon}
        top: 30px;
        bottom: 0;
        left: 46px;
        background-position: -491px -439px;
        width: 13px;
        height: 16px;
        margin-left: 10px;
        transition: height 0.5s ease-in,opacity 0.5s ease-in;
        
        }

`

const Part = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  flex-direction: column;
  justify-content:left;
  line-height: 20px;
  .kmk{
      /* margin-left:20px; */

      .mk{
      width: 210px;
      height: 174px;
    }
  }

`

const Ta = styled.div`
  width:50px;
  height:100%;
  padding-right: 30px;
  /* padding-left: 25px; */
  /* display:flex;
  justify-content:left; */

`

const Td = styled.div`
  width:50%;
  height:100%;
  padding-right: 30px;
  color: rgb(153, 153, 153);
  font-size:14px;
  display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;

`
const Tc = styled.div`
  width:100%;
  height:100%;
  padding-right: 30px;
  color: rgb(153, 153, 153);
  font-size:14px;

`
const Tl = styled.div`
    flex-direction: column;
    display: flex;
    justify-content:left;
    line-height: 20px;
    margin:0 auto;
`



export default withRouter(GoVideo);