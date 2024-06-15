import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>
                E-commerce Website: Definition and Description

                An e-commerce website is an online platform that allows businesses to conduct transactions over the internet. These websites serve as digital storefronts where customers can browse, select, and purchase products or services from the comfort of their homes. They are essential tools for businesses to reach a broader audience and streamline the buying process, offering a convenient alternative to traditional brick-and-mortar stores.
                </p>
                <p>
                E-commerce websites can range from simple single-page sites to complex platforms with thousands of products. They play a crucial role in the modern economy by providing businesses with the means to operate online, reach global markets, and offer customers a convenient shopping experience.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox