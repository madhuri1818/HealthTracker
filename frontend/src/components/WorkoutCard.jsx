import React from 'react';

const WorkoutCard = ({ workout }) => {
  return (
    <div className="bg-gradient-to-br from-sky-200 to-sky-300 overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <dl>
          <div className="sm:grid sm:grid-cols-2 sm:gap-4">
            <dt className="text-lg leading-5 font-medium text-gray-500">Date :</dt>
            <dd className="mt-1 text-lg leading-5 text-gray-900 sm:col-span-1">{workout.date}</dd>
            <dt className="text-lg leading-5 font-medium text-gray-500">Exercise :</dt>
            <dd className="mt-1 text-lg leading-5 text-gray-900 sm:col-span-1">{workout.exercise}</dd>
            <dt className="text-lg leading-5 font-medium text-gray-500">Duration :</dt>
            <dd className="mt-1 text-lg leading-5 text-gray-900 sm:col-span-1">{workout.duration}</dd>
            <dt className="text-lg leading-5 font-medium text-gray-500">Calories :</dt>
            <dd className="mt-1 text-lg leading-5 text-gray-900 sm:col-span-1">{workout.calories}</dd>
            {/* <dt className="text-lg leading-5 font-medium text-gray-500">Intensity :</dt> */}
            {/* <dd className="mt-1 text-lg leading-5 text-gray-900 sm:col-span-1">{workout.intensity}</dd> */}
            <dt className="text-lg leading-5 font-medium text-gray-500">Distance :</dt>
            <dd className="mt-1 text-lg leading-5 text-gray-900 sm:col-span-1">{workout.distance}</dd>
            <dt className="text-lg leading-5 font-medium text-gray-500">Heart Rate :</dt>
            <dd className="mt-1 text-lg leading-5 text-gray-900 sm:col-span-1">{workout.heartRate}</dd>
            <dt className="text-lg leading-5 font-medium text-gray-500">Weight :</dt>
            <dd className="mt-1 text-lg leading-5 text-gray-900 sm:col-span-1">{workout.weight}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default WorkoutCard;
