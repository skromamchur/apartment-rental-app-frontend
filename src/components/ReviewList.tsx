import { StarIcon } from '@heroicons/react/20/solid';
import { FormCard } from '@/components/FormCard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const ReviewList = ({ reviews }) => {
  console.log(reviews);
  return (
    <FormCard>
      <div className="bg-white">
        <div>
          <h2 className="sr-only">Customer Reviews</h2>

          <div>
            {reviews.map((review, reviewIdx) => (
              <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                <div className="flex-none py-10">
                  <img
                    src={review.reviewer.avatar}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                </div>
                <div
                  className={classNames(
                    reviewIdx === 0 ? '' : 'border-t border-gray-200',
                    'flex-1 py-10',
                  )}
                >
                  <h3 className="font-medium text-gray-900">
                    {review.reviewer.firstName} {review.reviewer.lastName}
                  </h3>
                  <p>
                    <time dateTime={review.createdAt}>{review.createdAt}</time>
                  </p>

                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0',
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{review.rating} out of 5 stars</p>

                  <div className="prose prose-sm mt-4 max-w-none text-gray-500">{review.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FormCard>
  );
};
