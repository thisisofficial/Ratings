import React from 'react'
import { App, Cont } from './Particles/Atoms/containers';
import bg1 from "/src/images/bg-pattern-top-desktop.svg";
import bg2 from "/src/images/bg-pattern-bottom-desktop.svg";
import bg1mobile from "/src/images/bg-pattern-top-mobile.svg";
import bg2mobile from "/src/images/bg-pattern-bottom-mobile.svg";
import { WrittenRating } from './Particles/written-rating';
import { WrittenReviews, StarReviews } from '../helpers/helpers';
import { Title, Text } from './Particles/Atoms/text';
import { StarRating } from './Particles/star-rating';

export function SocialProofPage() {
  return (
    <App bg1={bg1} bg1mobile={bg1mobile} bg2={bg2} bg2mobile={bg2mobile}>
        <Cont flex justify="space-between" dir="column">
            <Cont flex justify="space-between" width="100%" height="50%" marginphone="70px 0 0">
                <Cont width="40%" justify="start" align="start" height="100%" resetwidth>
                    <Title>10,000+ of our users love our products.</Title>
                    <Text big>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</Text>
                </Cont>
                <Cont width="50%" flexabsolute dir="column" height="80%" justify="space-between" align_self="flex-end" resetwidth heightphone="266px">
                    {StarReviews.map((review, index)=>(
                        <StarRating text={review.text} position={review.position}/>
                    ))}
                </Cont>
            </Cont>
            <Cont width="100%" height="40%" flex justify="space-between" resetwidth marginphone="0 0 70px">
                {WrittenReviews.map((review, index)=>(
                    <WrittenRating
                    text={review.text}
                    writer={review.name}
                    title={review.title}
                    image={review.image}
                    position={review.position}
                    />
                ))}
            </Cont>
        </Cont>
    </App>
  )
}
