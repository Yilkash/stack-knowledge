import { useState } from 'react';
import { openContractCall } from '@stacks/connect';
import { uintCV, stringUtf8CV, principalCV } from '@stacks/transactions';
import { network } from '@/lib/stacks';

export function useContract() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerResource = async (
    title: string,
    description: string,
    url: string,
    category: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      await openContractCall({
        network,
        contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        contractName: process.env.NEXT_PUBLIC_CONTRACT_NAME!,
        functionName: 'register-resource',
        functionArgs: [
          stringUtf8CV(title),
          stringUtf8CV(description),
          stringUtf8CV(url),
          stringUtf8CV(category)
        ],
        onFinish: (data) => {
          console.log('Transaction:', data.txId);
        },
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const tipResource = async (resourceId: number, amount: number) => {
    setLoading(true);
    setError(null);

    try {
      await openContractCall({
        network,
        contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        contractName: process.env.NEXT_PUBLIC_CONTRACT_NAME!,
        functionName: 'tip-resource',
        functionArgs: [uintCV(resourceId), uintCV(amount)],
        onFinish: (data) => {
          console.log('Tip sent:', data.txId);
        },
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addReview = async (resourceId: number, rating: number, comment: string) => {
    setLoading(true);
    setError(null);

    try {
      await openContractCall({
        network,
        contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        contractName: process.env.NEXT_PUBLIC_CONTRACT_NAME!,
        functionName: 'add-review',
        functionArgs: [
          uintCV(resourceId),
          uintCV(rating),
          stringUtf8CV(comment)
        ],
        onFinish: (data) => {
          console.log('Review added:', data.txId);
        },
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerResource, tipResource, addReview, loading, error };
}
