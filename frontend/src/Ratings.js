import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';

export default function Ratings(props) {
    return (
        <div>
            <div className="ratings">
        <span>
          <i className={
            props.rating >= 1
              ? "fa fa-star"
              : props.rating >= 0.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          
          >
          </i>
        </span>

        
        <span>
          <i className={
            props.rating >= 2
              ? "fa fa-star"
              : props.rating >= 1.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>


        <span>
          <i className={
            props.rating >= 3
              ?"fa fa-star"
              :props.rating >= 2.5
                ?"fa fa-star-half-o"
                :"fa fa-star-o"

              

          }
          >
          </i>
        </span>


        <span>
          <i className={
            props.rating >= 4
              ? "fa fa-star"
              : props.rating >= 3.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>


        <span>
          <i className={
            props.rating >= 5
              ? "fa fa-star"
              : props.rating >= 4.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>
         
        </div>
        <p>{props.rating}</p>

        </div>
    )
}
