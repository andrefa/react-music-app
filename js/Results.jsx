import React from 'react';

const Result = ({item}) => (
	<div className="col-lg-4">
		<div className="thumbnail">
			<img src={item.image} style={{width:250,height:250}}/>
			<div className="caption">
				<h3>{item.caption}</h3>
			</div>
		</div>
	</div>
);

const Results = ({data, onSelect}) => (
	<div className="row">
		{
      data.map((item) => (
				<Result
					key={item.id}
          item={item}
          onClick={() => {
            onSelect(item);
          }}
        />)
      )
    }
	</div>
);

export default Results;
