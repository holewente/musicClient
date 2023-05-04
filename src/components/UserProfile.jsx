import React,{useState} from 'react'
import { FileDrop } from './FileDrop'
import {Form,FormGroup,Label,Input,Col,Row,Button,Spinner} from 'reactstrap'
import { useMutation } from 'react-query'
import { updateAvatar,changePassword } from './getData'
import { MyModal } from './MyModal'

export const UserProfile=({loggedInUser,setLoggedInUser})=> {
  const [selFile,setSelFile]=useState({})
  const [msg,setMsg]=useState('')
  const [isUploading,setIsUploading]=useState(false)
  const [modal,setModal]=useState(false)
  const [newPw,setNewpw]=useState("")

  const mutationAvatar=useMutation(updateAvatar,{
    onSuccess: (data)=>{
      console.log(data.data)
      setMsg(data.data.msg)
      setLoggedInUser({...loggedInUser,avatar:data.data.avatar,avatar_id:data.data.avatar_id})
      setIsUploading(false)
    }
  })

  console.log(selFile)
  const handleUpdateAvatar=()=>{
    console.log("Calling Ajax")
    const formdata=new FormData()
    formdata.append("selFile",selFile)
    formdata.append("username",loggedInUser.username)
    formdata.append("avatar_id",loggedInUser.avatar_id)
    setIsUploading(true)
    mutationAvatar.mutate(formdata)
  }

  const handleDelete=()=>{
    console.log('töröl...')
    setModal(true)
  }

  const handleChangePw=()=>{
    console.log('új jelszo:',newPw)
    mutationChangePw.mutate({username:loggedInUser.username,password:newPw})
  }

  const mutationChangePw=useMutation(changePassword,{
  onSuccess: (data)=>{
    console.log(data.data)
    setMsg(data.data.msg)
  }  
})

  return (
    <div className='loginregisterpanel text-center mx-1'>
        <h6 className='p-2 text-center'>User Profile</h6>
        <div className='row border mx-2 p-1'>
          <div className='col-2'>Email:</div>
          <div className='col-10'>{loggedInUser.email}</div>
        </div>
        <Form>
        <FormGroup>
    <Label className='mt-2' for="pw" >
      New Password
    </Label>
    <Row className='text-center mx-1 justify-content-center'>
    <Col sm={8}>
    <Input
      id="pwd"
      name="password"
      type="password"
      value={newPw} onChange={(e)=>setNewpw(e.target.value)}
    />
    </Col>
    </Row>
    <Row className='text-center mx-2 justify-content-center'>
    <Col sm={6} className='mx-1'>
        <Input 
        type='button'
        disabled={!newPw || newPw.length<6}
        value='Change Password'
        className='btn btn-primary mx-2'
        onClick={handleChangePw}
        />
    </Col>
    </Row>
  </FormGroup>
    <FormGroup row >
      <FileDrop setSelFile={setSelFile}/>
    </FormGroup>
    <FormGroup row>
      {!isUploading? 
      <Input type='button' className='btn btn-primary text-center justify-content-center mx-0.3 ' value="Update avatar"
      disabled={!selFile.name}
      onClick={handleUpdateAvatar}
      />
      :
      <Button color="primary" disabled>
    <Spinner size="sm">
      Uploading avatar...
    </Spinner>
    <span>
      {' '}Loading
    </span>
    </Button>
}
      <Input type='button' className='btn text-center justify-content-center btn-danger mx-0.3  '
      onClick={handleDelete}
       value='Delete my profile'/>
    </FormGroup>
        <p className='msg'>{msg}</p>
    </Form>
    {modal && <MyModal modal={modal} setModal={setModal}
              username={loggedInUser.username} avatar_id={loggedInUser.avatar_id} setLoggedInUser={setLoggedInUser}/> }
              <h2>Your Profile:</h2>
              <h3>{loggedInUser.username}</h3> 
              <img className='profilkep' src={loggedInUser.avatar} alt="" />
    </div>
  )
}
