/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-03-15 16:48:41

* Last updated on: 2024-03-15 16:48:41
* Last updated by: Tien Tran
*------------------------------------------------------- */

import React from 'react';
import HexagonalMenu from 'src/components/UIControl/HexagonalMenu';

interface PropsType {
	onChange: (type: string) => void;
	value: 'all' | 'morning' | 'lunch' | 'snack' | 'dinner';
	[prop: string]: any;
}

const MealFilter = (props: PropsType) => {
	const { onChange, value } = props;

	const handleChange = React.useCallback((v: string) => {
		if (v === value) {
			onChange('all');
			return;
		}
		onChange(v);
	}, [onChange, value]);

	return (
		<div className="flex justify-around">
			<HexagonalMenu
				onClick={handleChange}
				value="morning"
				active={value === 'morning'}
				icon={
					<svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_51101_61)">
							<g clipPath="url(#clip1_51101_61)">
								<path d="M9.0234 40.2289C7.93441 41.316 7.93624 43.0846 9.02877 44.1788C10.123 45.2714 11.8917 45.2731 12.9805 44.1844L21.6829 35.4822L17.7255 31.525L9.0234 40.2289Z" fill="white" />
								<path d="M52.2807 7.37263L44.4311 15.2493L43.1201 13.9338L50.7092 5.79414L49.9738 5.05622L41.807 12.6162L40.494 11.3004L48.1175 3.19507L47.3244 2.39758L39.1828 9.98285L37.8698 8.6651L45.7191 0.78833L44.9351 0C44.9351 0 37.5451 5.81378 33.8966 8.81451C32.6176 9.86383 32.103 11.6404 32.2822 13.2911C32.528 15.523 32.7987 16.3888 31.895 17.2959L24.239 24.9764C14.4183 15.1179 3.66828 4.32897 2.56159 3.23455C1.91059 2.59014 0.977608 2.59014 0.393128 3.17699C-1.64435 5.22173 4.50775 17.4365 12.612 27.6746C14.3017 25.97 15.839 24.4364 15.839 24.4364L35.5219 44.1858C36.7396 45.4082 38.5119 45.1255 39.4466 44.1858H39.4483C40.5317 43.0988 40.5317 41.333 39.4483 40.2457C37.3655 38.156 33.0964 33.8683 28.1764 28.9273L35.8245 21.2522C36.7432 20.3307 37.5915 20.6134 39.8161 20.8742C41.4858 21.0705 43.3137 20.5666 44.3668 19.2544C47.3334 15.5481 53.0001 8.09276 53.0001 8.09276L52.2807 7.37263Z" fill="white" />
							</g>
						</g>
						<defs>
							<clipPath id="clip0_51101_61">
								<rect width="53.0001" height="45" fill="white" />
							</clipPath>
							<clipPath id="clip1_51101_61">
								<rect width="53.0001" height="45" fill="white" />
							</clipPath>
						</defs>
					</svg>
				}
				label="Morning"
			/>
			<HexagonalMenu
				onClick={handleChange}
				value="lunch"
				active={value === 'lunch'}
				icon={
					<svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_51101_61)">
							<g clipPath="url(#clip1_51101_61)">
								<path d="M9.0234 40.2289C7.93441 41.316 7.93624 43.0846 9.02877 44.1788C10.123 45.2714 11.8917 45.2731 12.9805 44.1844L21.6829 35.4822L17.7255 31.525L9.0234 40.2289Z" fill="white" />
								<path d="M52.2807 7.37263L44.4311 15.2493L43.1201 13.9338L50.7092 5.79414L49.9738 5.05622L41.807 12.6162L40.494 11.3004L48.1175 3.19507L47.3244 2.39758L39.1828 9.98285L37.8698 8.6651L45.7191 0.78833L44.9351 0C44.9351 0 37.5451 5.81378 33.8966 8.81451C32.6176 9.86383 32.103 11.6404 32.2822 13.2911C32.528 15.523 32.7987 16.3888 31.895 17.2959L24.239 24.9764C14.4183 15.1179 3.66828 4.32897 2.56159 3.23455C1.91059 2.59014 0.977608 2.59014 0.393128 3.17699C-1.64435 5.22173 4.50775 17.4365 12.612 27.6746C14.3017 25.97 15.839 24.4364 15.839 24.4364L35.5219 44.1858C36.7396 45.4082 38.5119 45.1255 39.4466 44.1858H39.4483C40.5317 43.0988 40.5317 41.333 39.4483 40.2457C37.3655 38.156 33.0964 33.8683 28.1764 28.9273L35.8245 21.2522C36.7432 20.3307 37.5915 20.6134 39.8161 20.8742C41.4858 21.0705 43.3137 20.5666 44.3668 19.2544C47.3334 15.5481 53.0001 8.09276 53.0001 8.09276L52.2807 7.37263Z" fill="white" />
							</g>
						</g>
						<defs>
							<clipPath id="clip0_51101_61">
								<rect width="53.0001" height="45" fill="white" />
							</clipPath>
							<clipPath id="clip1_51101_61">
								<rect width="53.0001" height="45" fill="white" />
							</clipPath>
						</defs>
					</svg>
				}
				label="Lunch"
			/>
			<HexagonalMenu
				onClick={handleChange}
				value="dinner"
				active={value === 'dinner'}
				icon={
					<svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_51101_61)">
							<g clipPath="url(#clip1_51101_61)">
								<path d="M9.0234 40.2289C7.93441 41.316 7.93624 43.0846 9.02877 44.1788C10.123 45.2714 11.8917 45.2731 12.9805 44.1844L21.6829 35.4822L17.7255 31.525L9.0234 40.2289Z" fill="white" />
								<path d="M52.2807 7.37263L44.4311 15.2493L43.1201 13.9338L50.7092 5.79414L49.9738 5.05622L41.807 12.6162L40.494 11.3004L48.1175 3.19507L47.3244 2.39758L39.1828 9.98285L37.8698 8.6651L45.7191 0.78833L44.9351 0C44.9351 0 37.5451 5.81378 33.8966 8.81451C32.6176 9.86383 32.103 11.6404 32.2822 13.2911C32.528 15.523 32.7987 16.3888 31.895 17.2959L24.239 24.9764C14.4183 15.1179 3.66828 4.32897 2.56159 3.23455C1.91059 2.59014 0.977608 2.59014 0.393128 3.17699C-1.64435 5.22173 4.50775 17.4365 12.612 27.6746C14.3017 25.97 15.839 24.4364 15.839 24.4364L35.5219 44.1858C36.7396 45.4082 38.5119 45.1255 39.4466 44.1858H39.4483C40.5317 43.0988 40.5317 41.333 39.4483 40.2457C37.3655 38.156 33.0964 33.8683 28.1764 28.9273L35.8245 21.2522C36.7432 20.3307 37.5915 20.6134 39.8161 20.8742C41.4858 21.0705 43.3137 20.5666 44.3668 19.2544C47.3334 15.5481 53.0001 8.09276 53.0001 8.09276L52.2807 7.37263Z" fill="white" />
							</g>
						</g>
						<defs>
							<clipPath id="clip0_51101_61">
								<rect width="53.0001" height="45" fill="white" />
							</clipPath>
							<clipPath id="clip1_51101_61">
								<rect width="53.0001" height="45" fill="white" />
							</clipPath>
						</defs>
					</svg>
				}
				label="Dinner"
			/>
			<HexagonalMenu
				onClick={handleChange}
				value="snack"
				active={value === 'snack'}
				icon={
					<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect opacity="0.01" width="56" height="56" fill="white" />
						<g clipPath="url(#clip0_0_102)">
							<path fillRule="evenodd" clipRule="evenodd" d="M45 12.0464C42.7853 12.0464 40.9036 10.3071 40.9036 8H15.1486C15.1486 10.304 13.2163 12.0464 11 12.0464V14.6671H45V12.0464ZM12.7004 17.9999L17.9067 48H38.2008L43.3013 17.9999H12.7004ZM39.2861 21.3264L38.1519 28H17.954L16.8198 21.3264H39.2861ZM20.7872 44.6672L19.6532 38.0001H36.4528L35.3203 44.6672H20.7872Z" fill="white" />
						</g>
						<defs>
							<clipPath id="clip0_0_102">
								<rect width="34" height="40" fill="white" transform="translate(11 8)" />
							</clipPath>
						</defs>
					</svg>

				}
				label="Snack"
			/>
		</div>
	);
};

export default MealFilter;
