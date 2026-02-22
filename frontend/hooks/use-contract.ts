import { useState } from 'react';
import { openContractCall } from '@stacks/connect';
import { uintCV, stringUtf8CV, listCV } from '@stacks/transactions';
import { network } from '@/lib/stacks';

/**
 * Custom hook for interacting with the Stacks smart contracts.
 * Handles transaction signing and execution for resource management.
 * 
 * @returns {Object} Contract interaction methods and state
 * @property {Function} registerResource - Register a new educational resource
 * @property {Function} tipResource - Send STX tip to a resource uploader
 * @property {Function} addReview - Add a rating and comment to a resource
 * @property {boolean} loading - Loading state for contract operations
 * @property {string | null} error - Error message from failed operations
 */
export function useContract() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Registers a new resource in the smart contract.
   * 
   * @param {string} title - Resource title
   * @param {string} description - Detailed description
   * @param {string} url - Resource URL (IPFS/Gaia)
   * @param {string} category - Educational category
   */
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
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  /**
   * Sends an STX tip to a resource's uploader.
   * 
   * @param {number} resourceId - Unique ID of the resource
   * @param {number} amount - Amount in microstacks (1 STX = 1,000,000)
   */
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
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  /**
   * Adds a review and rating to a specific resource.
   * 
   * @param {number} resourceId - Unique ID of the resource
   * @param {number} rating - Star rating (1-5)
   * @param {string} comment - Review text
   */
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
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  /**
   * Sets tags for a specific resource.
   * 
   * @param {number} resourceId - Unique ID of the resource
   * @param {string[]} tags - List of up to 10 tags
   */
  const setResourceTags = async (resourceId: number, tags: string[]) => {
    setLoading(true);
    setError(null);

    try {
      await openContractCall({
        network,
        contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        contractName: process.env.NEXT_PUBLIC_CONTRACT_NAME!,
        functionName: 'set-resource-tags',
        functionArgs: [
          uintCV(resourceId),
          listCV(tags.map(tag => stringUtf8CV(tag)))
        ],
        onFinish: (data) => {
          console.log('Tags set:', data.txId);
        },
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  /**
   * Reports a resource for inappropriate content.
   * 
   * @param {number} resourceId - Unique ID of the resource
   * @param {string} reason - Reason for reporting
   */
  const reportResource = async (resourceId: number, reason: string) => {
    setLoading(true);
    setError(null);

    try {
      await openContractCall({
        network,
        contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        contractName: process.env.NEXT_PUBLIC_CONTRACT_NAME!,
        functionName: 'report-resource',
        functionArgs: [
          uintCV(resourceId),
          stringUtf8CV(reason)
        ],
        onFinish: (data) => {
          console.log('Resource reported:', data.txId);
        },
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return { registerResource, tipResource, addReview, setResourceTags, reportResource, loading, error };
}
