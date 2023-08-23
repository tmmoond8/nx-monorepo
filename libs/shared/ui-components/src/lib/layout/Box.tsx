import React from 'react';

import { View, ViewProps, ViewStyle } from 'react-native';

export interface BoxProps extends ViewProps, ViewStyle {
  style?: ViewStyle;
  gap?: number;
}

export const Box = React.memo(({ children, ...props }: BoxProps) => {
  const { styleProps, restProps } = useFilterProps(props);
  const styles = React.useMemo(
    () => ({
      ...styleProps,
      ...(canSpread(props.style) ? props.style : {}),
    }),
    [styleProps]
  );

  return (
    <View {...restProps} style={styles}>
      {children}
    </View>
  );
});

export default React.forwardRef<View, BoxProps>((props, ref) => {
  const { styleProps, children, restProps } = useFilterProps(props);
  const styles = React.useMemo(
    () => ({
      ...styleProps,
      ...(canSpread(props.style) ? props.style : {}),
    }),
    [styleProps]
  );
  return (
    <View {...restProps} style={styles} ref={ref}>
      {children}
    </View>
  );
});

function canSpread(style?: ViewStyle) {
  return style !== null && typeof style === 'object';
}

const useFilterProps = (props: BoxProps) => {
  return React.useMemo(() => {
    const {
      backfaceVisibility,
      backgroundColor,
      borderBottomColor,
      borderBottomEndRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderBottomStartRadius,
      borderBottomWidth,
      borderColor,
      borderEndColor,
      borderLeftColor,
      borderLeftWidth,
      borderRadius,
      borderRightColor,
      borderRightWidth,
      borderStartColor,
      borderStyle,
      borderTopColor,
      borderTopEndRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderTopStartRadius,
      borderTopWidth,
      borderWidth,
      opacity,
      testID,
      elevation,
      children,
      alignContent,
      alignItems,
      alignSelf,
      aspectRatio,
      borderEndWidth,
      borderStartWidth,
      bottom,
      display,
      end,
      flex,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      height,
      justifyContent,
      left,
      margin,
      marginBottom,
      marginEnd,
      marginHorizontal,
      marginLeft,
      marginRight,
      marginStart,
      marginTop,
      marginVertical,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      overflow,
      padding,
      paddingBottom,
      paddingEnd,
      paddingHorizontal,
      paddingLeft,
      paddingRight,
      paddingStart,
      paddingTop,
      paddingVertical,
      position,
      right,
      start,
      top,
      width,
      zIndex,
      direction,
      shadowColor,
      shadowOffset,
      shadowOpacity,
      shadowRadius,
      transform,
      transformMatrix,
      rotation,
      scaleX,
      scaleY,
      translateX,
      translateY,
      ...restProps
    } = props;

    return {
      styleProps: {
        backfaceVisibility,
        backgroundColor,
        borderBottomColor,
        borderBottomEndRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderBottomStartRadius,
        borderBottomWidth,
        borderColor,
        borderEndColor,
        borderLeftColor,
        borderLeftWidth,
        borderRadius,
        borderRightColor,
        borderRightWidth,
        borderStartColor,
        borderStyle,
        borderTopColor,
        borderTopEndRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderTopStartRadius,
        borderTopWidth,
        borderWidth,
        opacity,
        testID,
        elevation,
        alignContent,
        alignItems,
        alignSelf,
        aspectRatio,
        borderEndWidth,
        borderStartWidth,
        bottom,
        display,
        end,
        flex,
        flexBasis,
        flexDirection,
        flexGrow,
        flexShrink,
        flexWrap,
        height,
        justifyContent,
        left,
        margin,
        marginBottom,
        marginEnd,
        marginHorizontal,
        marginLeft,
        marginRight,
        marginStart,
        marginTop,
        marginVertical,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        overflow,
        padding,
        paddingBottom,
        paddingEnd,
        paddingHorizontal,
        paddingLeft,
        paddingRight,
        paddingStart,
        paddingTop,
        paddingVertical,
        position,
        right,
        start,
        top,
        width,
        zIndex,
        direction,
        shadowColor,
        shadowOffset,
        shadowOpacity,
        shadowRadius,
        transform,
        transformMatrix,
        rotation,
        scaleX,
        scaleY,
        translateX,
        translateY,
      },
      restProps,
      children,
    };
  }, [props]);
};
