import React from 'react';
import { useMotionValue } from 'framer-motion';
import { useScrollbar } from '@14islands/r3f-scroll-rig';
import { Tracker } from '@14islands/r3f-scroll-rig/dist/src/hooks/useTrackerTypes';

interface Props {
	tracker: Tracker;
	prop?: string;
}

const useTrackerMotionValue = ({ tracker, prop = 'progress' }: Props) => {
	const progress = useMotionValue(1);
	const { onScroll } = useScrollbar();

	React.useEffect(() => {
		progress.set(tracker.scrollState.progress);
	}, [progress, tracker, prop]);

	React.useEffect(() => {
		return onScroll(() => {
			progress.set(tracker.scrollState.progress);
		});
	}, [tracker, progress, onScroll, prop]);

	return progress;
};

export default useTrackerMotionValue;
