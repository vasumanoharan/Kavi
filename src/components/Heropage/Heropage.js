import React from 'react'
import img1 from '../images/pp1.jpg'
import arry from '../Array/Arry'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ks from '../videos/be.mp4'
import './Heropage.css'


const Heropage = () => {
    var [movieChck, setmovieChck] = useState(true);
    function play() {
        if (movieChck) {
            setmovieChck(false)
        }
        else {
            setmovieChck(true)
        }
    }

    return (
        <div>
            <div className='Heropage'>
                {
                    movieChck ?
                        <div>
                            <img src={img1} width={'100%'} height={'400px'} style={{ cursor: 'pointer',position:'absoluet' }}></img>
                            <button onClick={play} style={{position:'relative',top:'-100px',left:'40px',padding:'4px',background:'red',cursor:'pointer'}}>Play</button>
                        </div> :
                        <video src={ks} controls></video>

                }


            </div>
            <div>
                {
                    arry.map(function (data) {
                        return (
                            <>
                                <Link to={'/card/' + data.id}>
                                    <div className='img1'>
                                        <img src={data.image} height={'300px'} width={'300px'} />

                                    </div>
                                </Link>
                            </>
                        )

                    })
                }
            </div>

        </div>
    )
}

export default Heropage
