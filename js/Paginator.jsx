import React from 'react';
import classNames from 'classnames';

const Paginator = ({hasPrevious, hasNext, onPrevious, onNext}) => (
	<div className="row">
		<nav>
			<ul className="pager">
				<li>
					<button className={classNames("btn", "btn-info", {
						disabled: !hasPrevious
					})} onClick={(e) => {
						if (hasPrevious)
							onPrevious();
						}}>
						Previous
					</button>
				</li>
				{'  '}
				<li>
					<button className={classNames("btn", "btn-info", {
						disabled: !hasNext
					})} onClick={(e) => {
						if (hasNext)
							onNext();
						}}>
						Next
					</button>
				</li>
			</ul>
		</nav>
	</div>
);

export default Paginator;
