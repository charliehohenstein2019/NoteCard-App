import React from 'react';
import { NavigationBar } from './NavigationBar';
import { PostCardContainer } from './PostCardContainer';

export class Canvas extends React.Component {


    render() {

        return (
            <div>
                <NavigationBar />
                <br />
                <div className="row">
                    <div className="col-lg-4 col-md-3">
                        <PostCardContainer day='Monday' />
                    </div>
                    <br/>
                    <div className="col-lg-4  col-md-3">
                        <PostCardContainer day='Tuesday' />
                    </div>
                    <br/>
                    <div className="col-lg-4  col-md-3">
                        <PostCardContainer day='Wednesday' />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <br />
                    <br />
                </div>
                <div className="row">
                    <div className="col-lg-4  col-md-3">
                        <PostCardContainer day='Thursday' />
                    </div>
                    <div className="col-lg-4  col-md-3">
                        <PostCardContainer day='Friday' />
                    </div>
                    <div className="col-lg-4  col-md-3">
                        <PostCardContainer day='Saturday / Sunday' />
                    </div>
                </div>

            </div>

        )

    }


}

