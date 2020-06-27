import React from 'react';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview-component';
import {selectCollections} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import './collections-overview.styles.scss';


const CollectionsOverview = ({collections}) =>(
    <div className = 'collections-overview'>

        {
            collections.map(({id , ...otherCollectionProps})=>(
                <CollectionPreview  key = {id} {...otherCollectionProps}/>
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export  default connect(mapStateToProps)(CollectionsOverview);