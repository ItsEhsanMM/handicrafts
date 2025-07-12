import React from 'react'
import NewHeader from './NewHeader'
import Footer from './Footer'



export default function SabadKharid() {
    let test = [
        {
            id: 1,
            title: "محصول"
        },
        {
            id: 1,
            title: "قیمت"
        },
        {
            id: 1,
            title: "تعداد"
        },
        {
            id: 1,
            title: "جمع جزء"
        }




    ]
    return (
        <>
            <div dir='rtl' className='custom-contianer'>
                <header>
                    <NewHeader />
                </header>
                <main>
                    <div>
                        <div className='h-[296px] border-2 border-zinc-700 rounded-[9px] '>
                            <div className='h-[155px]  bg-amber-600'>
                                <div>
                                    {test.map(test => (
                                        <span>
                                            {
                                                test.title
                                            }
                                        </span>
                                    ))

                                    }
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}
