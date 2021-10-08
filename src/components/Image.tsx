import React from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';
import {MaterialIcons} from "@expo/vector-icons";

export type Props = {
	url: string;
	showButton?: boolean;
	rounded?: boolean;
	imageStyle?: object;
};

export type PhotoBtnProps = {
	onPress: Function;
}

const Container = styled.SafeAreaView`
	align-self: center;
	margin-bottom: 10px;
`;
const StyledImage = styled.Image<any>`
	background-color: ${({theme}) => (theme as any).imageBackground}
	width: 100px;
	height: 100px;
	border-radius: ${({rounded}) => rounded ? 50 : 0}px;
`;
const ButtonContainer = styled.Pressable<any>`
	background-color: ${({theme}) => theme.imageButtonBackground};
	position: absolute;
	bottom: 0;
	right: 0;
	width: 30px;
	height: 30px;
	border-radius: 15px;
	justify-content: center;
	align-items: center;
`;
const ButtonIcon = styled(MaterialIcons).attrs({
	name: 'photo-camera',
	size: 22,
})<any>`
  color: ${({ theme }) => theme.imageButtonIcon};
`;
const PhotoButton: React.FC<PhotoBtnProps> = (
	{
		onPress,
	}
) => {
	return (
		<ButtonContainer
			onPress={onPress}
		>
			<ButtonIcon/>
		</ButtonContainer>
	);
};

const Image: React.FC<Props> = (
	{
		url,
		imageStyle,
		rounded= false,
		showButton = false,
	}
	) => {
	return (
		<Container>
			<StyledImage
				source={{ uri: url }}
				style={imageStyle}
				rounded={rounded}
			/>
			{showButton && <PhotoButton onPress={() => {}} />}
		</Container>
	)
}

export default Image;
